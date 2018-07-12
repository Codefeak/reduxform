import React from 'react';
import PersonalInformation from './PersonalInformation';
import SkillAndLocation from './SkillAndLocation';
import Portfolio from './Portfolio';
import { reduxForm } from 'redux-form';


const validate = (values, props)=>{
	console.log(props)
	const errors = {};
	
	return{
		fullName: !values.fullName ? errors.fullName='this field is required' : undefined,
		email:  !values.email ? 'this field is required' : undefined,
		phonenumber : !values.phonenumber ? 'this field is required' : undefined,

	}
}
const MainForm = props => {
	
	return (
		<form className="form" onSubmit={props.handleSubmit}>
			<PersonalInformation/>
			<SkillAndLocation/>
			<button type="Submit" disabled ={ props.Invalid} >Submit</button>
		</form>	
	)
}

export default reduxForm({
	form: 'mainForm',
	validate
})(MainForm);