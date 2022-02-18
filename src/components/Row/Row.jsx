import React from 'react';
import './Row.css';
function Row(props) {
  return (
    <div className='row-container'>
      <span className='row-category'>{props.category}</span>
      <span className='row-year'>{props.year}</span>
      <span className='row-fullname'>{props.fullname}</span>
    </div>
  );
}

export default Row;
