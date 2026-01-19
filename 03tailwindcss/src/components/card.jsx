import React from 'react';

function Card(props) {
  console.log(props); // logs props passed to the component

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2>Card</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
