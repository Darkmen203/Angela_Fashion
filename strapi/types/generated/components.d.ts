import type { Schema, Attribute } from '@strapi/strapi';

export interface BooleanSizes extends Schema.Component {
  collectionName: 'components_boolean_sizes';
  info: {
    displayName: 'SIZES';
    description: '';
  };
  attributes: {
    XS: Attribute.Boolean & Attribute.DefaultTo<false>;
    S: Attribute.Boolean & Attribute.DefaultTo<false>;
    M: Attribute.Boolean & Attribute.DefaultTo<false>;
    L: Attribute.Boolean & Attribute.DefaultTo<false>;
    XL: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface TextName extends Schema.Component {
  collectionName: 'components_text_names';
  info: {
    displayName: 'Name';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'boolean.sizes': BooleanSizes;
      'text.name': TextName;
    }
  }
}
