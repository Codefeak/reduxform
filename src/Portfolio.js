import React from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validate from './validate';
import './portfolio.css';

const Portfolio=(props)=>{
  console.log(props)
	return(
		<form className="portfolio-container" id="portfolio-container" onSubmit={props.handleSubmit}>
            <h3>3.Portfolio</h3>
            <hr/>
            <p>Prove you're IBM's next great designer by showing us who you are.
              What you've done. How you think. Tell us your story.</p>
            <Field 
              component="input"
              id="url" 
              type="text" 
              name="portfolioLink" 
              placeholder="Portfolio link*"
              />
            <Field 
              component = "input"
              name="others" 
              rows="8" 
              cols="80"
              placeholder="Anythingelse (another link, availability, etc.)?"
              >
            </Field>
            <button onClick = {()=>props.history.push("/SkillsAndLocation")} >Back</button> 
            <button type="Submit" disabled ={props.invalid}>Submit</button>
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
})(Portfolio)

const PortfolioConnect = connect(mapStateToProps)(reduxFormConnect);

export default connect()(PortfolioConnect);


Portfolio.propTypes ={
  invalid : PropTypes.bool.isRequired,
  history : PropTypes.object.isRequired,
  handleSubmit : PropTypes.func.isRequired,

}