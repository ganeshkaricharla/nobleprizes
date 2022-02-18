import React from 'react';

function Featured(props) {
  const data = props.data;
  const duplicates = data.filter((item, index) => {});
  console.log(duplicates);
  return <div>Featured</div>;
}

export default Featured;
