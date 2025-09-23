import type { Schema, Struct } from '@strapi/strapi';

export interface SharedApproach extends Struct.ComponentSchema {
  collectionName: 'components_shared_approach';
  info: {
    description: 'Approach section component';
    displayName: 'Approach';
  };
  attributes: {
    items: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBottomCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_bottom_cta';
  info: {
    description: 'Bottom call to action component';
    displayName: 'Bottom CTA';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true>;
    lead: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBrand extends Struct.ComponentSchema {
  collectionName: 'components_shared_brand';
  info: {
    description: 'Brand information for header';
    displayName: 'Brand';
  };
  attributes: {
    logoText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Qoyy Global'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_button';
  info: {
    description: 'Button component';
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_buttons';
  info: {
    description: 'Contact buttons component';
    displayName: 'Contact Buttons';
  };
  attributes: {
    email: Schema.Attribute.Component<'shared.button', false>;
    whatsapp: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info';
  info: {
    description: 'Contact information component';
    displayName: 'Contact Info';
  };
  attributes: {
    addressLines: Schema.Attribute.JSON & Schema.Attribute.Required;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    hours: Schema.Attribute.JSON & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta';
  info: {
    description: 'Call to action component';
    displayName: 'CTA';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    lead: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq';
  info: {
    description: 'FAQ item component';
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer';
  info: {
    description: 'Footer component for global settings';
    displayName: 'Footer';
  };
  attributes: {
    companyName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Qoyy Global'>;
    contactInfo: Schema.Attribute.Component<'shared.contact-info', false>;
    copyright: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'COPYRIGHT \u24B8 2025 QOYY GLOBAL (002857086-D)\u200D\nAll rights reserved.'>;
    quickLinks: Schema.Attribute.Component<'shared.footer-link', true>;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_link';
  info: {
    description: 'Footer navigation link';
    displayName: 'Footer Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_header';
  info: {
    description: 'Header component for global settings';
    displayName: 'Header';
  };
  attributes: {
    brand: Schema.Attribute.Component<'shared.brand', false>;
    navLinks: Schema.Attribute.Component<'shared.nav-link', true>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero';
  info: {
    description: 'Hero section component';
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    title2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_link';
  info: {
    description: 'Navigation link for header';
    displayName: 'Navigation Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOffer extends Struct.ComponentSchema {
  collectionName: 'components_shared_offer';
  info: {
    description: 'Offer item component';
    displayName: 'Offer';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedProcess extends Struct.ComponentSchema {
  collectionName: 'components_shared_process';
  info: {
    description: 'Process steps component';
    displayName: 'Process';
  };
  attributes: {
    steps: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_card';
  info: {
    description: 'Service card component';
    displayName: 'Service Card';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.JSON;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedShareHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_share_heroes';
  info: {
    displayName: 'share.hero';
  };
  attributes: {};
}

export interface SharedSharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_seos';
  info: {
    displayName: 'shared.seo';
  };
  attributes: {};
}

export interface SharedSharedseo extends Struct.ComponentSchema {
  collectionName: 'components_shared_sharedseos';
  info: {
    displayName: 'sharedseo';
  };
  attributes: {};
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_us';
  info: {
    description: 'Why us section component';
    displayName: 'Why Us';
  };
  attributes: {
    points: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.approach': SharedApproach;
      'shared.bottom-cta': SharedBottomCta;
      'shared.brand': SharedBrand;
      'shared.button': SharedButton;
      'shared.contact-buttons': SharedContactButtons;
      'shared.contact-info': SharedContactInfo;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.footer': SharedFooter;
      'shared.footer-link': SharedFooterLink;
      'shared.header': SharedHeader;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.nav-link': SharedNavLink;
      'shared.offer': SharedOffer;
      'shared.process': SharedProcess;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service-card': SharedServiceCard;
      'shared.share-hero': SharedShareHero;
      'shared.shared-seo': SharedSharedSeo;
      'shared.sharedseo': SharedSharedseo;
      'shared.slider': SharedSlider;
      'shared.why-us': SharedWhyUs;
    }
  }
}
