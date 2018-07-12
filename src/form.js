import React from 'react';
import SkillAndLocation from './SkillAndLocation';
import Portfolio from './Portfolio';
import { reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PersonalInformation from './PersonalInformation';




const validate = (values, props)=>{
	const errors = {};
	if (!values.fullName ) {errors.fullName = 'this field is required' };
	if (!values.email ) {errors.mail = 'this field is required' };
	if (!values.phonenumber ) {errors.phonenumber = 'this field is required' };

	return errors;
}

const MainForm = props => {
	console.log(props.myFormErrors)
	return (
		<Router>
			
			<form className="form" onSubmit={props.handleSubmit}>
				<Switch>
					<Route exact path = "/" render ={()=><PersonalInformation />}/>
					<Route exact path = "/PersonalInformation" render ={()=><PersonalInformation/>}/>
					<Route exact path = "/SkillsAndLocation" render ={()=><SkillAndLocation/>}/>
					<Route exact path = "/Portfolio" render ={()=><Portfolio/>}/>
				</Switch>	
			</form>	
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