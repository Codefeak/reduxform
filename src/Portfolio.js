import React from 'react';
import { Field } from 'redux-form';
import './portfolio.css';

const Portfolio=(props)=>{
	return(
		<section className="portfolio-container">
            <h3>3.Portfolio</h3>
            <hr/>
            <p>Prove you're IBM's next great designer by showing us who you are.
              What you've done. How you think. Tell us your story.</p>
            <Field 
              id="url" 
              type="text" 
              name="portfolioLink" 
              placeholder="Portfolio link*"
              />
            <Field 
              component = "textarea"
              name="others" 
              rows="8" 
              cols="80"
              placeholder="Anythingelse (another link, availability, etc.)?"
              >
            </Field>
            
          </section>
	)
}

export default Portfolio