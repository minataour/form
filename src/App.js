import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import { Account } from './components/account';
import { PersonalInfo } from './components/pesonal-info';
import { useState } from 'react';

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

  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step => (step + 1))
  }
  
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
        handleChange={handleChange}/>
      }

      case 2: {
        return <PersonalInfo 
        addressOne={formData.addressOne}
        addressTwo={formData.addressTwo}
        city={formData.city}
        state={formData.state}
        zip={formData.zip}
        handleChange={handleChange}
       />
      }
      
      case 3: {
        return 
      }

      case 4: {
        return 
      }
    }
  }

  const handleChange = (event) => {
    setFormData(prevData => {
        return {
            ...prevData,
            [event.target.name] : event.target.value
        }
    })
    console.log(formData)
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
                  <form id="msform">
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
                      <li className={`${step == 4 && "active"}`} id="confirm">
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
                          className="prev action-button-previous"
                          value="Back"
                          onClick={prevStep}
                        />
                      )}
                      {step === 4 ? (
                        <input
                          type="button"
                          name="confirm"
                          className="next action-button"
                          value="Confirm"
                        />
                      ) : (
                        <input
                          type="button"
                          name="next"
                          className="next action-button"
                          value="Next"
                          onClick={nextStep}
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
