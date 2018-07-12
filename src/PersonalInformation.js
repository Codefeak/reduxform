import React from 'react';
import { Field } from 'redux-form';
import './personalInformation.css';

const PersonalInformation =(props)=>{
	return(
		<section className="personal-info">
            <h3>1.Personal Information</h3>
            <hr/>
            <div className="name-container">
              <div className="name-email">
                <Field 
                  component = 'input' 
                  id="full-name" 
                  className=""
                  type="text" 
                  name="fullName" 
                  placeholder="Full Name*"
                 />
                
                <Field
                  component="input" 
                  id="e-mail"
                  className=""
                  type="text" 
                  name="email" 
                  placeholder="Email*"
                  />
                 
                <Field
                  component="input" 
                  id="re-email" 
                  type="text" 
                  name="email" 
                  placeholder="Re-enter email*"
                  />
              </div>
              <Field
                component="input" 
                id="phone" 
                className = ""
                type="text" 
                name="phonenumber" 
                placeholder="Phone#*"
                />
                
            </div>
            <div className="address-container">
              <Field
                component="input" 
                id= "street-address" 
                type="text" 
                name="address" 
                placeholder="Address*"
                />
                
              <div className="">
                <Field
                  component="input" 
                  id= "city" 
                  type="text" 
                  name="city" 
                  placeholder="City*" 
                  />
                 
                <Field
                  component="input" 
                  id= "state" 
                  type="text" 
                  name="state" 
                  placeholder="State" 
                  />
                 
                <Field
                  component="input" 
                  id="country" 
                  type="text" 
                  name="country" 
                  placeholder="Country/Region*" 
                  />
                
                <Field
                  component="input" 
                  id="zipCode" 
                  type="text" 
                  name="zipCode" 
                  placeholder="Zip/Postal Code" 
                  />
                  
              </div>
              <Field
                component="input" 
                id="story" 
                type="text" 
                name="storyLine" 
                placeholder="How did you hear about us"
                />
               
            </div>
          </section>
	)
}

export default PersonalInformation;