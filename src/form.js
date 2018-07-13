import React from 'react';
import SkillAndLocation from './SkillAndLocation';
import Portfolio from './Portfolio';
import { reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PersonalInformation from './PersonalInformation';
import validate from './validate';




// const validate = (values, props)=>{
// 	console.log('validate')
// 	const errors = {};
// 	if (!values.fullName ) {errors.fullName = 'this field is required' };
// 	if (!values.email ) {errors.mail = 'this field is required' };
// 	if (!values.phonenumber ) {errors.phonenumber = 'this field is required' };
// 	if (!values.experience){errors.experience = 'Must Choose AtLeast One Experience'};
// 	if (values.experience && values.experience.length===0){errors.experience = 'Must Choose AtLeast One Experience'};
// 	if (!values.interest){errors.interest = 'Must Choose AtLeast One Interest'};
// 	if (values.interest && values.interest.length===0){errors.interest = 'Must Choose AtLeast One Interest'};
// 	if (!values.primaryDesign){errors.primaryDesign = 'Must Choose AtLeast One PrimaryDesign'};
// 	if (!values.portfolioLink){errors.portfolioLink = 'Portfolio Link cannnot be empty'};

// 	return errors;
// }

const MainForm = props => {
	return (
		<Router>
			
			<div className="form">
				<Switch>
					<Route exact path = "/" render ={(routerProps)=><PersonalInformation onSubmit={() => routerProps.history.push('/SkillsAndLocation')} {...routerProps}/>}/>
					<Route exact path = "/PersonalInformation" render ={(routerProps)=><PersonalInformation onSubmit={() => console.log('test') || routerProps.history.push('/SkillsAndLocation')} {...routerProps}/>}/>
					<Route exact path = "/SkillsAndLocation" render ={(routerProps)=><SkillAndLocation onSubmit={() => routerProps.history.push('/Portfolio')} {...routerProps}/>}/>
					<Route exact path = "/Portfolio" render ={(routerProps)=><Portfolio onSubmit={(values)=>console.log('values', values)} {...routerProps}/>}/>
				</Switch>	
			</div>	
		</Router>
			
			
	)
}

const mapStateToProps = state => {
	return{
		myFormErrors: getFormSyncErrors('mainForm')(state)	
	};
};

const reduxFormConnect = reduxForm({
	form: 'mainForm',
	validate
})(MainForm)

const MainFormConnect = connect(mapStateToProps)(reduxFormConnect)

export default MainFormConnect;

MainForm.propTypes = {
	handleSubmit : PropTypes.func.isRequired,
}