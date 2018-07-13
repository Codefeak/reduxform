import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import './personalInformation.css';
import { connect } from 'react-redux';
import validate from './validate';
import PropTypes from 'prop-types';

const PersonalInformation =(props)=>{
  console.log(props);
	return(
		<form onSubmit={props.handleSubmit} className="personal-info" id="personal-info">
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
            <button disabled = {props.invalid} type='submit' >Next</button>
          </form>
	)
}

const mapStateToProps = state =>{
  return{
    myFormErrors:getFormSyncErrors('mainForm')(state)
  };
};

const reduxFormConnect = reduxForm({
    form: 'mainForm',
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(PersonalInformation)

const PersonalInformationConnect = connect(mapStateToProps)(reduxFormConnect);


export default connect ()(PersonalInformationConnect);


PersonalInformation.propTypes ={
  invalid : PropTypes.bool.isRequired,
  handleSubmit : PropTypes.func.isRequired,

}