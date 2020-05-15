import React from 'react';

function CreateContactForm({ onSave }) {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [image, setImage] = React.useState('')

  const handleSave = (e) => {
    e.preventDefault()
    const data = {name, phone, address, imageSrc: image}
    onSave(data)
  }

  return (
    <form className="form">
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Phone"
        value={phone} 
        onChange={(e) => setPhone(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Address"
        value={address} 
        onChange={(e) => setAddress(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Image"
        value={image} 
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleSave}>Сохранить</button>
    </form>
  )
}

export default CreateContactForm



