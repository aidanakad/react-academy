import React from 'react';

function ContactItem(props) {
  return (
    <div className="contact-item">
      <img src={props.imgSrc} alt="avatar"/>
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="phone">{props.phone}</div>
        <div className="address">{props.address}</div>
      </div>
    </div>
  )
}

export default ContactItem
