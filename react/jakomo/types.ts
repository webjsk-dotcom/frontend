export interface NavItem {
  label: string;
  href: string;
}

export interface StoryItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}