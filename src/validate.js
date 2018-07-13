
const validate = (values, props)=>{
	console.log('validate')
	const errors = {};
	if (!values.fullName ) {errors.fullName = 'this field is required' };
	if (!values.email ) {errors.mail = 'this field is required' };
	if (!values.phonenumber ) {errors.phonenumber = 'this field is required' };
	if (!values.experience){errors.experience = 'Must Choose AtLeast One Experience'};
	if (values.experience && values.experience.length===0){errors.experience = 'Must Choose AtLeast One Experience'};
	if (!values.interest){errors.interest = 'Must Choose AtLeast One Interest'};
	if (values.interest && values.interest.length===0){errors.interest = 'Must Choose AtLeast One Interest'};
	if (!values.primaryDesign){errors.primaryDesign = 'Must Choose AtLeast One PrimaryDesign'};
	if (!values.portfolioLink){errors.portfolioLink = 'Portfolio Link cannnot be empty'};

	return errors;
}

export default validate;