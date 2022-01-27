import { ReactElement } from 'react';

export interface LocationStates {
  '/'?: {};
  '/cart'?: {};
  '/#'?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  element: ReactElement<any, any>;
}
