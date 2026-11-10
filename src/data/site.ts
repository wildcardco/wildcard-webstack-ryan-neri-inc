import sources from './image-sources.json';

export const phoneDisplay = '(708) 672-5599';
export const phoneTel = 'tel:+17086725599';
export const email = 'neriinc@att.net';
export const emailHref = 'mailto:neriinc@att.net';
export const hours = 'Monday–Friday 10am–6pm';
export const mailingAddress = 'PO Box 145, Crete, Illinois 60417';
export const serviceArea =
  'Crete, Frankfort, Mokena, Orland Park, the South Suburbs, Northwest Indiana, Will County, Cook County, Lake County in Illinois, and Lake County, Indiana';
export const unilockLine = "The South Suburbs' Only Unilock-Certified Home Builder";
export const homeTitle = 'Neri, Inc. | Custom Homes, Landscape & Plumbing';

export const instagram = 'https://www.instagram.com/neriinc';
export const facebook = 'https://www.facebook.com/profile.php?id=100064899931929';

export const imageSources = sources;

export const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/custom-home-building', label: 'Custom Home Building' },
  { href: '/landscape', label: 'Landscape' },
  { href: '/plumbing', label: 'Plumbing' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

export const homeServices = [
  {
    href: '/custom-home-building',
    title: 'Custom Home Building',
    type: 'build',
    items: [
      'Custom home builds',
      'Room renovations, including kitchen, bathroom, and basement',
      'Home additions',
    ],
  },
  {
    href: '/landscape',
    title: 'Landscape and Outdoor Living',
    type: 'landscape',
    items: [
      'Landscape and garden design',
      'Irrigation and sprinkler systems',
      'Custom outdoor lighting',
      'Decks, pergolas, and patios',
      'Pool houses and outdoor kitchens',
      'Fire pits and fire features',
      'Drainage and stormwater control',
    ],
  },
  {
    href: '/plumbing',
    title: 'Plumbing',
    type: 'plumbing',
    items: [
      'New construction, renovations, and additions',
      'Water heaters and tanks',
      'Sewer and septic',
      'Upgrades for older homes',
    ],
  },
] as const;

export const projects = [
  {
    slug: 'liberty',
    title: 'Liberty',
    pageTitle: 'Liberty',
    featured: true,
    alt: 'Two-story house with dark upper siding, brick on the lower story, and a dark garage door.',
  },
  {
    slug: '24372-liberty',
    title: '24372 Liberty',
    pageTitle: '24372 Liberty',
    featured: true,
    alt: 'White brick house with a dark roof, an arched entry, and a garage.',
  },
  {
    slug: 'joeorrroad',
    title: 'Joe Orr Road',
    pageTitle: 'Joe Orr Road',
    featured: true,
    alt: 'Brick house with white garage doors at dusk and snow on the lawn.',
  },
  {
    slug: 'cardinalcourt',
    title: 'Cardinal Court',
    pageTitle: 'Cardinal Court Build',
    featured: true,
    alt: 'Brick house with an arched entry and two dark garage doors.',
  },
  {
    slug: 'projectgallery',
    title: 'Past Project Gallery',
    pageTitle: 'Past Project Gallery',
    featured: false,
    alt: 'Photo from the past project gallery.',
  },
] as const;

export function projectPhotos(slug: string) {
  const list = sources.projects[slug as keyof typeof sources.projects] ?? [];
  return list;
}

export const testimonials = [
  {
    quote: 'Neri helped me build the home of our dreams.',
    name: 'LISA H., NERI CLIENT',
  },
  {
    title: 'Working with Neri Inc., was a fantastic experience from start to finish.',
    quote:
      'What we appreciated most about the building process was the personalized guidance we received especially from Vince. He listened carefully to our ideas, offered thoughtful suggestions, and helped us design a floor plan that perfectly met our needs. We never felt pressured into making decisions; instead, we were truly part of every step of the process. Vince and the team were easy to work with, budget-conscious, and always open to collaboration. The final product is a reflection of quality craftsmanship and attention to detail. We’re incredibly happy with the results and would confidently recommend Neri Inc., to anyone looking for a builder who values both integrity and excellence.',
    name: 'Marquita & Keith',
  },
  {
    title:
      'They provided their expertise and got everything fixed and functioning properly the way it should be.',
    quote:
      'Neri, Inc. came to my home to install a new water [softener] but in doing so found other issues that were needing to be fixed.',
    name: 'Sandra S.',
  },
] as const;
