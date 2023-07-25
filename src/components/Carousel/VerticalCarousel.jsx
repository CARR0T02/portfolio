import React, { useState } from 'react';
import { BsChevronDown as Next, BsChevronUp as Prev } from 'react-icons/bs';
import './Carousel.css';

const VerticalCarousel = ({ data }) => {
  const dataLength = data.length;

  const [activeIndex, setActiveIndex] = useState(dataLength - 1);

  // Used to determine the height/spacing of each item
  const itemHeight = 100;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;
    else {
      return (itemIndex - activeIndex) * itemHeight;
    }
  };

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
                  <button
                    type='button'
                    onClick={() => setActiveIndex(i)}
                    className={`carousel-item clickable ${
                      activeIndex === i ? 'active' : ''
                    }`}
                    key={i}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    <span>
                      {experience.data.start} — {experience.data.end}
                    </span>
                    <header>
                      {experience.data.company} · {experience.data.position}
                    </header>
                  </button>
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
