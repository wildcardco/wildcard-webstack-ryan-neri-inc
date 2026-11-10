<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FwbAlert, FwbButton, FwbCheckbox, FwbInput, FwbSelect, FwbTextarea } from 'flowbite-vue';

const lookingOptions = [
  { value: 'Build a home', name: 'Build a home' },
  { value: 'Renovate/Add an addition', name: 'Renovate/Add an addition' },
  { value: 'Landscaping/Outdoor Living Services', name: 'Landscaping/Outdoor Living Services' },
  { value: 'Plumbing', name: 'Plumbing' },
];

const timeFrameOptions = [
  'Immediately',
  'In the next 3-6 months',
  '6 months to a year',
  'Over 1 year from now',
];

const contactOptions = ['Phone Call', 'Text', 'Email'];

const typeMap: Record<string, string> = {
  build: 'Build a home',
  home: 'Build a home',
  renovate: 'Renovate/Add an addition',
  addition: 'Renovate/Add an addition',
  renovation: 'Renovate/Add an addition',
  landscape: 'Landscaping/Outdoor Living Services',
  landscaping: 'Landscaping/Outdoor Living Services',
  plumbing: 'Plumbing',
};

const name = ref('');
const email = ref('');
const phone = ref('');
const looking = ref('');
const timeframes = ref<string[]>([]);
const description = ref('');
const contactMethods = ref<string[]>([]);
const anything = ref('');
const company = ref('');
const startedAt = ref(0);
const submitted = ref(false);
const error = ref('');

onMounted(() => {
  startedAt.value = Date.now();
  const type = new URLSearchParams(window.location.search).get('type')?.toLowerCase() ?? '';
  if (typeMap[type]) looking.value = typeMap[type];
});

function onSubmit() {
  error.value = '';
  if (company.value.trim()) {
    submitted.value = true;
    return;
  }
  if (Date.now() - startedAt.value < 2000) {
    error.value = 'Please wait a moment and try again.';
    return;
  }
  if (!name.value.trim() || !email.value.trim() || !looking.value) {
    error.value = 'Name, email, and what you are looking to do are required.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    error.value = 'Email addresses should follow the format user@domain.com.';
    return;
  }

  const body = [
    `Name: ${name.value.trim()}`,
    `Email: ${email.value.trim()}`,
    `Phone: ${phone.value.trim()}`,
    `Are you currently looking to: ${looking.value}`,
    `What is your time frame?: ${timeframes.value.join(', ')}`,
    `Tell us about you and your project: ${description.value.trim()}`,
    `What is the best way to contact you?: ${contactMethods.value.join(', ')}`,
    `Anything else we should know?: ${anything.value.trim()}`,
  ].join('\n');

  window.location.href = `mailto:neriinc@att.net?subject=${encodeURIComponent('Project request for Neri, Inc.')}&body=${encodeURIComponent(body)}`;
  submitted.value = true;
}
</script>

<template>
  <div>
    <h2 v-if="submitted" class="text-3xl text-ink">Thank you!</h2>
    <form v-else class="space-y-5" novalidate @submit.prevent="onSubmit">
      <FwbAlert v-if="error" type="danger" :icon="false">{{ error }}</FwbAlert>

      <div class="absolute -left-[10000px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input v-model="company" type="text" tabindex="-1" autocomplete="off" />
        </label>
      </div>

      <FwbInput v-model="name" label="Name" type="text" required autocomplete="name" />
      <FwbInput v-model="email" label="Email" type="email" required autocomplete="email" />
      <FwbInput v-model="phone" label="Phone" type="tel" autocomplete="tel" />
      <FwbSelect
        v-model="looking"
        label="Are you currently looking to"
        placeholder="Select one"
        required
        :options="lookingOptions"
      />

      <fieldset>
        <legend class="mb-2 text-sm font-medium text-gray-900">What is your time frame?</legend>
        <div class="space-y-2">
          <FwbCheckbox
            v-for="option in timeFrameOptions"
            :key="option"
            v-model="timeframes"
            :value="option"
            :label="option"
          />
        </div>
      </fieldset>

      <FwbTextarea
        v-model="description"
        label="Tell us about you and your project. What are you looking to do and why are you inquiring?"
        :rows="5"
      />

      <fieldset>
        <legend class="mb-2 text-sm font-medium text-gray-900">What is the best way to contact you?</legend>
        <div class="space-y-2">
          <FwbCheckbox
            v-for="option in contactOptions"
            :key="option"
            v-model="contactMethods"
            :value="option"
            :label="option"
          />
        </div>
      </fieldset>

      <FwbTextarea v-model="anything" label="Anything else we should know?" :rows="4" />

      <FwbButton type="submit">Send</FwbButton>
      <p class="font-meta text-sm text-ink/80">
        Send opens an email to neriinc@att.net. A hosted form is not connected yet.
      </p>
    </form>
  </div>
</template>
