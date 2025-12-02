export interface NavItem {
  id: string;
  label: string;
}

export enum SectionType {
  HERO = 'hero',
  GALLERY = 'gallery',
  VISION = 'vision',
  SERVICES = 'services',
  CONTACT = 'contact'
}

export interface VisionResponse {
  statement: string;
  keywords: string[];
}
