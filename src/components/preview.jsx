import React from 'react'
import { motion } from 'framer-motion'

export const Preview = ({formData}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="form-card"
    >
      <h2 className="fs-title">Respone Review</h2>
      <div>
        <label className="field">Name:</label>
        <span className="info">{formData.name}</span>
      </div>
      <div>
        <label className="field">Email:</label>
        <span className="info">{formData.email}</span>
      </div>
      <div>
        <label className="field">Contact no:</label>
        <span className="info">{formData.phone}</span>
      </div>
      <div>
        <label className="field">Address:</label>
        <span className="info">
          {formData.addressOne}{formData.addressTwo}
        </span>
      </div>
      <div>
        <label className="field">State:</label>
        <span className="info">{formData.state}</span>
      </div>
      <div>
        <label className="field">City:</label>
        <span className="info">{formData.city}</span>
      </div>
      <div>
        <label className="field">Zip Code:</label>
        <span className="info">{formData.zip}</span>
      </div>
    </motion.div>
  );
}
