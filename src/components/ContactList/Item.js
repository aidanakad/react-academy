import React from 'react';

function ContactItem({ contact }) {
  const { name, imgSrc, phone, address } = contact

  return (
    <div className="contact-item">
      <img src={imgSrc} alt="avatar"/>
      <div className="info">
        <div className="name">{name}</div>
        <div className="phone">{phone}</div>
        <div className="address">{address}</div>
      </div>
    </div>
  )
}

export default ContactItem
