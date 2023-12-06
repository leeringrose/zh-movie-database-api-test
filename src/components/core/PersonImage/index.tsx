import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { wrapImagePath } from '../../../shared/service';

interface PersonImageProps {
  path: string | null
  gender: number
  alt?: string
}

const PersonImage: React.FC<PersonImageProps> = (props) => {
  return <LazyLoadImage
    style={{
      borderRadius: 10
    }}
    width='100%'
    height='100%'
    {...props}
    src={props.path ? `${wrapImagePath(props.path)}`
      : `/assets/Avatar/${props.gender === 1 ? 'female.png' : 'male.png'}`}
    placeholderSrc={
      `/assets/Avatar/${props.gender === 1 ? 'female.png' : 'male.png'}`
    }
    effect='blur'
  />;
};

export default PersonImage;