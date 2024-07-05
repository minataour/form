import React from 'react'

export const PersonalInfo = ({ addressOne, addressTwo, city, state, zip, handleChange, errors}) => {
  return (
    <div className="form-card">
      <h2 className="fs-title">Personal Information</h2>
      <input
        type="text"
        name="addressOne"
        placeholder="Address"
        value={addressOne}
        onChange={handleChange}
      />
      {errors.addressError.length > 0 && 
        <span className='error'>{errors.addressError}
        </span>}
      <input
        type="text"
        name="addressTwo"
        placeholder="Address (optional)"
        value={addressTwo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={state}
        onChange={handleChange}
      />
      {errors.stateError.length > 0 && 
        <span className='error'>{errors.stateError}
        </span>}
      <input
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={handleChange}
      />
      {errors.cityError.length > 0 && 
        <span className='error'>{errors.cityError}
        </span>}
      <input
        type="text"
        name="zip"
        placeholder="Zip code"
        value={zip}
        onChange={handleChange}
      />
    </div>
  );
}
