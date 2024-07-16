import type { Schema, Attribute } from '@strapi/strapi';

export interface RetailSale extends Schema.Component {
  collectionName: 'components_retail_sales';
  info: {
    displayName: 'Sale';
    icon: 'cube';
  };
  attributes: {
    currency: Attribute.Relation<
      'retail.sale',
      'oneToOne',
      'api::currency.currency'
    >;
    price: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'retail.sale': RetailSale;
    }
  }
}
