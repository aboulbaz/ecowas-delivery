import flattenMessages from './utils';
import frMessages from './fr';
import enMessages from './en';
import poMessages from './po';

export const intlMessages = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
  po: flattenMessages(poMessages),
};
