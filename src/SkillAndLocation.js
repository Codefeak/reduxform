import React from 'react';
import { Field } from 'redux-form';
import './skillAndLocation.css';

const SkillAndLocation =(props)=>{
	return(
		<section className="skills-location">
            <h3>2.Skills and Location</h3>
            <hr/>
            <p>Which is your primaryDesign discipline?*</p>
            <div className="radio-btn-container">
              <Field
                component="input" 
                type="radio" 
                id = "btn-1" 
                name="primaryDesign" 
                />
               	<label htmlFor="btn-1">Design Research</label>
              <Field
                component="input" 
                type="radio" 
                id = "btn-2" 
                name="primaryDesign" 
                />
                <label htmlFor ="btn-2">Visual Design</label>
              <Field
                component="input" 
                type="radio" 
                id="btn-3" 
                name="primaryDesign" 
                />
              <label htmlFor="btn-3" >UX Design</label>
              <Field
                component="input" 
                type="radio" 
                id="btn-4" 
                name="primaryDesign" 
                />
              <label htmlFor="btn-4">Front-end Dev</label>

            </div>
            <div className="column-container">
              <div className="left-column">
                <p>Do you have experience with any other disciplines?</p>
                <div className="checkbox-container">
                  <Field
                    component="input" 
                    type="checkbox" 
                    id ="v-design" 
                    name="Visual Design"
                    />
                  <label htmlFor="v-design">Visual design</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="ux-design" 
                    name="UX Design"
                    />
                  <label htmlFor="ux-design">UX Design</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="front-end" 
                    name="Front-end Development" 
                    />
                  <label htmlFor="front-end">Front-end Development</label><br/>
                  
                </div>
              </div>
              <div className="right-column">
                <p>Where are you interested in working?*</p>
                <p>You must be legally authorized to work without visa sponsorship
                   in the location(s) you choose.</p>
                <div className="checkbox-container">
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="austin-texas" 
                    name="Austin,Texas"
                    />
                  <label htmlFor="austin-texas">Austin Texas</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="new-york" 
                    name="New York, New York"
                    />
                  <label htmlFor="new-york">New York, New York</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="canada" 
                    name="Toronto, Canada"
                    />
                  <label htmlFor="canada">Toronto, Canada</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="china" 
                    name="Shanghai, China"
                    />
                  <label htmlFor="china">Shanghai, China</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="ireland" 
                    name="Dublin, Ireland"
                    />
                  <label htmlFor="ireland">Dublin, Ireland</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="uk" 
                    name="Hursley, United Kingdom"
                    />
                  <label htmlFor="uk">Hursley, United Kingdom</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="germany" 
                    name="Boeblingen, Germany"
                    />
                  <label htmlFor="germany">Boeblingen, Germany</label><br/>
                  <Field
                    component="input" 
                    type="checkbox" 
                    id="other-places" 
                    name="Somewhere else"
                    />
                  <label htmlFor="other-places">Somewhere else</label><br/>
                </div>
              </div>
            </div>
          </section>
	)
}

export default SkillAndLocation;
