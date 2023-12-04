import { imageServerURL } from '../config';
import { IDepartmentColorMap } from './types';

export const wrapImagePath: (path: string) => string = (path) => {
  return imageServerURL + path;
};

export const GenderIdentities = ['Unknown', 'Female', 'Male'];

export const DepartmentColorMap: IDepartmentColorMap = {
  'Acting': 'primary',
  'Production': 'success',
  'Directing': 'warning',
  'Art': 'secondary',
  'Lighting': 'warning',
  'Writing': 'error'
};