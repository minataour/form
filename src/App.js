import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import { Account } from './components/account';
import { PersonalInfo } from './components/pesonal-info';
import { useState } from 'react';
import { Preview } from './components/preview';
import { Success } from './components/success';

function App() {
  const [formData, setFormData] = useState({
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
    nameError: '',
    emailError: '',
    phoneError: '',
    addressError: '',
    cityError: '',
    stateError: ''
  })

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

  const fieldValidation = (name, value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}$/;

    switch(name) {
      case 'name': 
        if(value.length === 0) {
          setErrors(errors => ({
            ...errors,
            nameError: "Please enter name!" 
          }))  
        } else if(value.length < 5) {
          setErrors(errors => ({
            ...errors,
            nameError: "Full name must at least 5 characters!"
          }))
        } else {
          setErrors(errors => ({
            ...errors,
            nameError: ""
          }))
        }
        break
      
      case 'email':
        if(value.length === 0) {
          setErrors(errors => ({
            ...errors,
            emailError: "Please enter an email!" 
          }))  
        } else if(!emailPattern.test(value)) {
          setErrors(errors => ({
            ...errors,
            emailError: "Email is not valid!"
          }))
        } else {
          setErrors(errors => ({
            ...errors,
            emailError: ""
          }))
        }
        break

        case 'phone':
          if(value.length === 0){
            setErrors(errors => ({
              ...errors,
              phoneError: "Enter a contact number!"
            }))
          } else if(!phonePattern.test(value)) {
            setErrors(errors => ({
              ...errors,
              phoneError: "Enter a valid contact!"
            }))
          } else {
            setErrors(errors => ({
              ...errors,
              phoneError: ""
            }))
          }
          break

        case 'addressOne':
          if(value.length === 0){
            setErrors(errors => ({
              ...errors,
              addressError: "Enter address!"
            }))
          } else if (value.length < 10){
            setErrors(errors => ({
              ...errors,
              addressError: "Enter minimum address!"
            }))
          } else {
            setErrors(errors => ({
              ...errors,
              addressError: ""
            }))
          }
          break

        case 'city':
          if(value.length === 0){
            setErrors(errors => ({
              ...errors,
              cityError: "Enter a city!"
            }))
          }
          break

        case 'state':
          if(value.length === 0){
            setErrors(errors => ({
              ...errors,
              stateError: "Enter a State!"
            }))
          }
          break

        default: return
    }
  }

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target

    setFormData(prevData => {
        return {
            ...prevData,
            [name] : value
        }
    })
    fieldValidation(name,value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    switch(step){
      case 1:
        fieldValidation('name', formData.name)
        fieldValidation('email', formData.email)
        fieldValidation('phone', formData.phone)
        break
      
      case 2:
        fieldValidation('addressOne', formData.addressOne)
        fieldValidation('city', formData.city)
        fieldValidation('state', formData.state)
        break

      default: return
    }
    
    let valid = true
    Object.values(errors).forEach(val => val.length > 0 && (valid = false))
    if(valid){
      console.log(valid)
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
                        onClick={() => setStep((step) => (step = 1))}
                        id="account"
                      >
                        <strong>Account</strong>
                      </li>
                      <li
                        className={`${step >= 2 && "active"}`}
                        onClick={() => setStep((step) => (step = 2))}
                        id="personal"
                      >
                        <strong>Personal</strong>
                      </li>
                      <li
                        className={`${step >= 3 && "active"}`}
                        onClick={() => setStep((step) => (step = 3))}
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
