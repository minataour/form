import React from 'react'

export const Account = ({name, email, number, handleChange, errors}) => {
  return (
    <div className="form-card">
      <h2 className="fs-title">Account Information</h2>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email Id"
        value={email}
      />
      {errors.emailError.length > 0 && 
        <span className='error'>{errors.emailError}
        </span>}
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="UserName"
        value={name}
      />
      {errors.nameError.length > 0 && 
        <span className='error'>{errors.nameError}
        </span>}
      <input
        type="text"
        name="phone"
        onChange={handleChange}
        placeholder="Contact No."
        value={number}
      />
      {errors.phoneError.length > 0 && 
        <span className='error'>{errors.phoneError}
        </span>}
    </div>
  );
}
