import React from 'react';

import { IMovieCredit, ITvCredit } from '../../shared/types';

interface CreditCarouselProps {
  items: IMovieCredit[] | ITvCredit[]
}

const CreditCarousel: React.FC<CreditCarouselProps> = ({ items }) => {
  // eslint-disable-next-line no-console
  console.log(items);
  return <h2> Carousel!!</h2>;
};

export default CreditCarousel;