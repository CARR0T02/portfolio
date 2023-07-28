import { useState } from 'react';
import { BsChevronDown as Next, BsChevronUp as Prev } from 'react-icons/bs';
import CarouselItem from './CarouselItem';
import './Carousel.css';

const VerticalCarousel = ({ data }) => {
  const dataLength = data.length;

  const [activeIndex, setActiveIndex] = useState(dataLength - 1);

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 > dataLength - 1) {
          return prevIndex;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return prevIndex;
      }
      if (direction === 'prev') {
        return prevIndex - 1;
      }
    });
  };

  return (
    <article className='carousel'>
      <div className='carousel__wrapper'>
        <button
          type='button'
          className={`carousel__button prev ${
            activeIndex > 0 ? 'clickable' : 'transparent'
          }`}
          disabled={activeIndex <= 0}
          onClick={() => handleClick('prev')}
        >
          <Prev />
        </button>

        <div className='carousel__inner'>
          <div className='carousel__slide-container'>
            {data.map((experience, i) => (
              <CarouselItem
                experience={experience}
                index={i}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                key={i}
              />
            ))}
          </div>
        </div>

        <button
          type='button'
          className={`carousel__button next ${
            activeIndex < dataLength - 1 ? 'clickable' : 'transparent'
          }`}
          disabled={activeIndex >= dataLength}
          onClick={() => handleClick('next')}
        >
          <Next />
        </button>
      </div>
      <div className='carousel__content'>
        <p>{data[activeIndex].body}</p>
      </div>
    </article>
  );
};

export default VerticalCarousel;
