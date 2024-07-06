import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import { Account } from './components/account';
import { PersonalInfo } from './components/pesonal-info';
import { useState } from 'react';
import { Preview } from './components/preview';
import { Success } from './components/success';
import { useLocalStorage } from './components/useLocalStorage'; //custom hook for local storage
import { motion } from 'framer-motion';

function App() {
  const [formData, setFormData] = useLocalStorage("dsa",{
    name: '',
    email: '',
    phone: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    addressOne: '',
    city: '',
    state: ''
  })

  //Navigation code for form
  const [step, setStep] = useState(1)

  const prevStep = () => {
    setStep(step => (step - 1))
  }

  const componentChange = () => {
    switch (step) {
      case 1: {
        return <Account 
        name={formData.name} 
        email={formData.email} 
        number={formData.phone} 
        handleChange={handleChange}
        errors={errors}/>
      }

      case 2: {
        return <PersonalInfo 
        addressOne={formData.addressOne}
        addressTwo={formData.addressTwo}
        city={formData.city}
        state={formData.state}
        zip={formData.zip}
        handleChange={handleChange}
        errors={errors}
       />
      }
      
      case 3: {
        return <Preview formData={formData} />
      }

      case 4: {
        return <Success />
      }
      default: return
    }
  }

  // Validation for important form fields
  const fieldValidation = (name, value, currentErrors) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}$/;
    let errormsg = ''
    console.log(name,value)

    switch(name) {
      case 'name': 
        if(value.length === 0) {
          errormsg = "Please enter name!"
        } else if(value.length < 5) {
          errormsg = "Full name must at least 5 characters!"
        } else {
          errormsg = ""
        }
        break
      
      case 'email':
        if(value.length === 0) {
          errormsg = "Please enter an email!"  
        } else if(!emailPattern.test(value)) {
          errormsg = "Email is not valid!"
        } else {
          errormsg = ""
        }
        break

      case 'phone':
          if(value.length === 0){
            errormsg = "Enter a contact number!"
          } else if(!phonePattern.test(value)) {
            errormsg = "Enter a valid contact!"
          } else {
            errormsg = ""
          }
          break

      case 'addressOne':
          if(value.length === 0){
            errormsg = "Enter address!"
          } else if (value.length < 10){
            errormsg = "Enter minimum address!"
          } else {
            errormsg = ""
          }
          break

      case 'city':
          if(value.length === 0){
            errormsg = "Enter a city!"
          }
          break

      case 'state':
          if(value.length === 0){
            errormsg = "Enter a State!"
          }
          break

        default: return errormsg = ""
    }
    return {...currentErrors, [name]: errormsg}
  }

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    let newErrors = {...errors}

    setFormData(prevData => {
        return {
            ...prevData,
            [name] : value
        }
    })

    if(name != 'addressTwo' && name != 'zip'){
      newErrors = fieldValidation(name,value, newErrors)
       setErrors(e => e = newErrors)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let newErrors = {...errors}
    if(step === 3){
      setStep(step => step+1)
      return
    }

    switch(step){
      case 1:
        newErrors = fieldValidation('name', formData.name, newErrors)
        newErrors = fieldValidation('email', formData.email, newErrors)
        newErrors =  fieldValidation('phone', formData.phone, newErrors)
        break
      
      case 2:
        newErrors = fieldValidation('addressOne', formData.addressOne, newErrors)
        newErrors = fieldValidation('city', formData.city, newErrors)
        newErrors = fieldValidation('state', formData.state, newErrors)
        break

      default: return
    }
    
    setErrors(e => e = newErrors)

    let valid = true
    Object.values(newErrors).forEach(val => val.length > 0 && (valid = false))
    if(valid){
      setStep(step => step + 1)
    } 
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row justify-content-center mt-0">
          <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mb-3 mt-2">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
              <h2>
                <strong>Sign Up Your User Account</strong>
              </h2>
              <p>Fill all form field to go to next step</p>
              <div className="row">
                <div className="col-md-12 mx-0">
                  <form id="msform" onSubmit={handleSubmit}>
                    <ul id="progressbar" className="p-0">
                      <li
                        className="active"
                        id="account"
                      >
                        <strong>Account</strong>
                      </li>
                      <li
                        className={`${step >= 2 && "active"}`}
                        id="personal"
                      >
                        <strong>Personal</strong>
                      </li>
                      <li
                        className={`${step >= 3 && "active"}`}
                        id="preview"
                      >
                        <strong>Preview</strong>
                      </li>
                      <li className={`${step === 4 && "active"}`} id="confirm">
                        <strong>Finish</strong>
                      </li>
                    </ul>
                    <fieldset>
                      {componentChange()}
                      {step === 1 ? (
                        ""
                      ) : (
                        <input
                          type="button"
                          name="back"
                          className="action-button-previous"
                          value="Back"
                          onClick={prevStep}
                        />
                      )}
                      {step === 4 ? "" : (
                        <input
                          type="button"
                          name="next"
                          className="action-button"
                          value={`${step === 3 ? "Confirm" : "Next"}`}
                          onClick={handleSubmit}
                        />
                      )}
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
