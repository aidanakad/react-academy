import React from 'react';

function Title({ text = "Привет" }) {
  return (
    <div className="title">
      <h1>{text}</h1>
      <div>My first react app</div>
    </div>
  )
}

export default Title;
