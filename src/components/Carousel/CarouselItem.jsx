import React from 'react';

import './Carousel.css';

function CarouselItem({ experience, index, activeIndex }) {
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
      className={`carousel-item clickable ${
        activeIndex === index ? 'active' : ''
      }`}
      style={{
        transform: `translateY(${determinePlacement(index)}px)`,
      }}
    >
      <span>
        {experience.data.start} — {experience.data.end}
      </span>
      <header>
        {experience.data.company} · {experience.data.position}
      </header>
    </button>
  );
}

export default CarouselItem;
