import React from 'react'

export const PersonalInfo = ({ addressOne, addressTwo, city, state, zip, handleChange}) => {
  return (
    <div className="form-card">
      <h2 className="fs-title">Personal Information</h2>
      <input
        type="text"
        name="addressOne"
        placeholder="Address Line 1"
        value={addressOne}
        onChange={handleChange}
      />
      <input
        type="text"
        name="addressTwo"
        placeholder="Address Line 2"
        value={addressTwo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="City"
        value={state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={handleChange}
      />
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
