import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 7755,
};

export const sampleWithPartialData: ICategory = {
  id: 10353,
  slug: 'round',
};

export const sampleWithFullData: ICategory = {
  id: 2352,
  name: 'yum gadzooks taint',
  slug: 'afterwards',
};

export const sampleWithNewData: NewCategory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
