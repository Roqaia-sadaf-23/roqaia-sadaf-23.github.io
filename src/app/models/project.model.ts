import type { TranslationKey } from '../data/translations';

export interface ProjectImage {
  readonly src: string;
  readonly altKey: TranslationKey;
}

export interface ProjectLink {
  readonly labelKey: TranslationKey;
  readonly url: string;
}

export interface ProjectDetailGroup {
  readonly titleKey: TranslationKey;
  readonly itemKeys: readonly TranslationKey[];
}

export interface Project {
  readonly id: 'shifaa' | 'sakinah' | 'dvld' | 'ecommerce' | 'ozzo';
  readonly title: string;
  readonly titleKey?: TranslationKey;
  readonly typeKey: TranslationKey;
  readonly descriptionKey: TranslationKey;
  readonly detailDescriptionKey: TranslationKey;
  readonly technologies: readonly string[];
  readonly images: readonly ProjectImage[];
  readonly cardImageCount: number;
  readonly featureKeys?: readonly TranslationKey[];
  readonly detailGroups?: readonly ProjectDetailGroup[];
  readonly links: readonly ProjectLink[];
  readonly featured?: boolean;
  readonly placeholder?: boolean;
}
