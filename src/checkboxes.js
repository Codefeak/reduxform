import React, { Component } from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';

class Checkboxes extends Component {
	
	field = ({input, meta, options}) => {

    const {onChange } = input;
    const {touched, error} = meta;
    const inputValue = input.value;

    const checkboxes = options.map(({label, value}, index) => {

      const handleChange = (event) => {
      	console.log(event);
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        return onChange(arr);
      };
      const checked = inputValue.includes(value);
      return (
      			<div className="checkbox-container">
			        <input type="checkbox" id={value} value={value} checked={checked} onChange={handleChange} />
        			<label key={`checkbox-${index}`} htmlFor={value}>
			          {label}
			        </label><br/>          
                </div>
      );
    });

    return (
      <div>
        <div>{checkboxes}</div>
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };

  render() {
    return <Field {...this.props} type="checkbox" component={this.field} name={this.props.name} />;
  }
}

export default Checkboxes;

Checkboxes.propTypes ={
	options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired
};