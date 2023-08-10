import React from 'react';

import './Carousel.css';

function CarouselItem({ experience, index, activeIndex, setActiveIndex }) {
  // Used to determine the height/spacing of each item
  const itemHeight = 100;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;
    else {
      return (itemIndex - activeIndex) * itemHeight;
    }
  };

  return (
    <button
      type='button'
      onClick={() => setActiveIndex(index)}
      className={`carousel-item clickable`}
      style={{
        transform: `translateY(${determinePlacement(index)}px)`,
        height: `${itemHeight}px`,
      }}
    >
      {/* <span>
        {experience.data.start} — {experience.data.end}
      </span> */}
      <header>
        {experience.data.company}
        {/* · {experience.data.position} */}
      </header>
    </button>
  );
}

export default CarouselItem;
