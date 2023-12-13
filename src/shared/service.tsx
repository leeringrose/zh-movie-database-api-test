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
  'Lighting': 'info',
  'Writing': 'error',
  'Camera': 'default'
};

export const warnAdultWithBadge: (isAdult: boolean, children: ReactNode) => ReactNode =
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

export const getParentSubPath: (path: string) => string = (path) => {
  return path.substring(0, path.lastIndexOf('/'));
};

export const replaceLastSubpath:
  (
    currentRouterPath: string,
    replacement: string
  ) => string = (
    currentRouterPath,
    replacement
  ) => {
    return currentRouterPath.substring(
      0,
      currentRouterPath.lastIndexOf('/')) + `${replacement}`;
  };