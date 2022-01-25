import { ReactElement } from 'react';

export interface LocationStates {
  '/'?: {};
  '/cart'?: {};
  '/#'?: {};
  //
  '/hotel'?: {};
  '/hotel/:id'?: {};
  '/hotel/checkout'?: {};
  '/bus'?: {};
  '/bus/:id'?: {};
  '/bus/checkout'?: {};
  '/listing-stay'?: {};
  '/listing-stay-map'?: {};
  '/listing-stay-detail'?: {};
  //
  '/listing-experiences'?: {};
  '/listing-experiences-map'?: {};
  '/listing-experiences-detail'?: {};
  //
  '/listing-car'?: {};
  '/listing-car-map'?: {};
  '/listing-car-detail'?: {};
  //
  '/checkout'?: {};
  '/pay-done'?: {};
  //
  '/account'?: {};
  '/account-savelists'?: {};
  '/account-password'?: {};
  '/account-billing'?: {};
  //
  '/blog'?: {};
  '/blog-single'?: {};
  //
  '/add-listing-1'?: {};
  '/add-listing-2'?: {};
  '/add-listing-3'?: {};
  '/add-listing-4'?: {};
  '/add-listing-5'?: {};
  '/add-listing-6'?: {};
  '/add-listing-7'?: {};
  '/add-listing-8'?: {};
  '/add-listing-9'?: {};
  '/add-listing-10'?: {};
  //
  '/author'?: {};
  '/search'?: {};
  '/about'?: {};
  '/contact-us'?: {};
  '/login'?: {};
  '/signup'?: {};
  '/phone-verfication'?: {};
  '/forgot-pass'?: {};
  '/page404'?: {};
  '/subscription'?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  element: ReactElement<any, any>;
}
