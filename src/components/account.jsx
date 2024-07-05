import React from 'react'

export const Account = ({name, email, number, handleChange}) => {

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
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="UserName"
        value={name}
      />
      <input
        type="text"
        name="phone"
        onChange={handleChange}
        placeholder="Contact No."
        value={number}
      />
    </div>
  );
}
