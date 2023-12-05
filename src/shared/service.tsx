import { ReactNode } from 'react';
import Badge from '@mui/material/Badge';

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

export const warnAdult: (isAdult: boolean, children: ReactNode) => ReactNode =
  (isAdult, children) => {
    if (isAdult) {
      return <Badge color='error'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant='dot'
      > {children} </Badge>;
    } else {
      return <>{children} </>;
    }
  };