import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import './skillAndLocation.css';
import Checkboxes from './checkboxes';
import { connect } from 'react-redux';
import validate from './validate';
import PropTypes from 'prop-types';

const SkillAndLocation =(props)=>{
  console.log(typeof(props.invalid))
  const experience = [
                      {label: 'Visual Design', value:'Visual Design'},
                      {label:'Ux Design', value:'Ux Design'},
                      {label: 'Front-End Development', value: 'FrontEnd Development'},
                     ]

  const interest =  [
                      {label: 'Austin, Texas', value:'Austin,Texas' },
                      {label: 'New York, New York', value:'New York, New York' },
                      {label: 'Toronto, Canada', value:'Toronto, Canada' },
                      {label: 'Shanghai, China', value:'Shanghai, China' },
                      {label: 'Dublin, Ireland', value:'Dublin, Ireland' },
                      {label: 'Hursley, United Kingdom', value:'Hursley, United Kingdom' },
                      {label: 'Boeblingen, Germany', value:'Boeblingen, Germany' },
                      {label: 'Somewhere else', value:'Somewhere else' },
                    ]
	return(
		<form onSubmit={props.handleSubmit} className="skills-location" id="skills-location">
            <h3>2.Skills and Location</h3>
            <hr/>
            <p>Which is your primaryDesign discipline?*</p>
            <div className="radio-btn-container">
              <Field
                component="input" 
                type="radio" 
                id = "btn-1" 
                name="primaryDesign"
                value="Design Research"
                />
               	<label htmlFor="btn-1">Design Research</label>
              <Field
                component="input" 
                type="radio" 
                id = "btn-2" 
                name="primaryDesign" 
                value="Visual Design"
                />
                <label htmlFor ="btn-2">Visual Design</label>
              <Field
                component="input" 
                type="radio" 
                id="btn-3" 
                name="primaryDesign" 
                value="UX Design"
                />
              <label htmlFor="btn-3" >UX Design</label>
              <Field
                component="input" 
                type="radio" 
                id="btn-4" 
                name="primaryDesign" 
                value="Front-end Dev"
                />
              <label htmlFor="btn-4">Front-end Dev</label>

            </div>
            <div className="column-container">
              <div className="left-column">
                <p>Do you have experience with any other disciplines?</p>
                <div className="checkbox-container">
                  <Checkboxes options = { experience } name= 'experience'/>                  
                </div>
              </div>
              <div className="right-column">
                <p>Where are you interested in working?*</p>
                <p>You must be legally authorized to work without visa sponsorship
                   in the location(s) you choose.</p>
                <div className="checkbox-container">
                  <Checkboxes options ={ interest } name = "interest"/>
                </div>
              </div>
            </div>
            <button onClick = {()=>props.history.push("/PersonalInformation")} >Back</button> 
            <button disabled = {props.invalid} type="submit" >Next</button>
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
})(SkillAndLocation)

const SkillAndLocationConnect = connect(mapStateToProps)(reduxFormConnect);

export default SkillAndLocationConnect;

SkillAndLocation.propTypes ={
  invalid : PropTypes.bool.isRequired,
  handleSubmit : PropTypes.func.isRequired,
  history : PropTypes.object.isRequired,

}