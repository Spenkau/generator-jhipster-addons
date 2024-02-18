import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 24483,
};

export const sampleWithPartialData: ITask = {
  id: 24775,
  name: 'bah strident',
  categoryId: 'plus fooey',
};

export const sampleWithFullData: ITask = {
  id: 21754,
  name: 'inside besides',
  categoryId: 'hotel livid perfectly',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
