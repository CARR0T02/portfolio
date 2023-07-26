import React, { useState } from 'react';
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
    <div className='container'>
      <article className='outer-container'>
        <div className='carousel-wrapper'>
          <button
            type='button'
            className={`carousel-button prev ${
              activeIndex > 0 ? 'clickable' : 'transparent'
            }`}
            disabled={activeIndex <= 0}
            onClick={() => handleClick('prev')}
          >
            <Prev />
          </button>

          <div className='carousel'>
            <div className='slides'>
              <div className='carousel-inner'>
                {data.map((experience, i) => (
                  <CarouselItem
                    experience={experience}
                    index={i}
                    activeIndex={activeIndex}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            type='button'
            className={`carousel-button next ${
              activeIndex < dataLength - 1 ? 'clickable' : 'transparent'
            }`}
            disabled={activeIndex >= dataLength}
            onClick={() => handleClick('next')}
          >
            <Next />
          </button>
        </div>
        <div className='content'>
          <p>{data[activeIndex].body}</p>
        </div>
      </article>
    </div>
  );
};

export default VerticalCarousel;
