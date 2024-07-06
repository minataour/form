import React from 'react'
import { motion } from 'framer-motion';

export const PersonalInfo = ({ addressOne, addressTwo, city, state, zip, handleChange, errors}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="form-card"
    >
      <h2 className="fs-title">Personal Information</h2>
      <input
        type="text"
        name="addressOne"
        className={`${errors.addressOne.length > 0 && "red"}`}
        placeholder="Address"
        value={addressOne}
        onChange={handleChange}
      />
      {errors.addressOne.length > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error"
        >
          {errors.addressOne}
        </motion.span>
      )}
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
        className={`${errors.state.length > 0 && "red"}`}
        placeholder="State"
        value={state}
        onChange={handleChange}
      />
      {errors.state.length > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error"
        >
          {errors.state}
        </motion.span>
      )}
      <input
        type="text"
        name="city"
        className={`${errors.city.length > 0 && "red"}`}
        placeholder="City"
        value={city}
        onChange={handleChange}
      />
      {errors.city.length > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error"
        >
          {errors.city}
        </motion.span>
      )}
      <input
        type="text"
        name="zip"
        placeholder="Zip code"
        value={zip}
        onChange={handleChange}
      />
    </motion.div>
  );
}
