import React, { useState } from 'react';
import { BsChevronDown as Next, BsChevronUp as Prev } from 'react-icons/bs';
import './Carousel.css';

const VerticalCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 70;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;
    else {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 > data.length - 1) {
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
      <section className='outer-container'>
        <div className='carousel-wrapper'>
          <button
            type='button'
            className='carousel-button prev clickable'
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
                      activeIndex === i && 'active'
                    } ${Math.abs(
                      determinePlacement(i) <= visibleStyleThreshold &&
                        'visible'
                    )}`}
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
            className='carousel-button next clickable'
            onClick={() => handleClick('next')}
          >
            <Next />
          </button>
        </div>
        <div className='content'>
          <p>{data[activeIndex].body}</p>
        </div>
      </section>
    </div>
  );
};

export default VerticalCarousel;
