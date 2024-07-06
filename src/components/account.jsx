import React from 'react'
import { motion } from 'framer-motion'

export const Account = ({name, email, number, handleChange, errors}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-12rem", opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="form-card"
    >
      <h2 className="fs-title">Account Information</h2>
      <input
        type="email"
        name="email"
        className={`${errors.email.length > 0 && "red"}`}
        onChange={handleChange}
        placeholder="Email Id"
        value={email}
      />
      {errors.email.length > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error"
        >
          {errors.email}
        </motion.span>
      )}
      <input
        type="text"
        name="name"
        className={`${errors.name.length > 0 && "red"}`}
        onChange={handleChange}
        placeholder="UserName"
        value={name}
      />
      {errors.name.length > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error"
        >
          {errors.name}
        </motion.span>
      )}
      <input
        type="text"
        name="phone"
        className={`${errors.phone.length > 0 && "red"}`}
        onChange={handleChange}
        placeholder="Contact No."
        value={number}
      />
      {errors.phone.length > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="error"
        >
          {errors.phone}
        </motion.span>
      )}
    </motion.div>
  );
}
