import React from 'react';

function CarouselTags({ tools }) {
  return (
    <ul className='flex tags-list carousel__tags'>
      {tools.map((tool) => {
        return <li key={tool} className='li-no-style'>{tool}</li>;
      })}
    </ul>
  );
}

export default CarouselTags;
