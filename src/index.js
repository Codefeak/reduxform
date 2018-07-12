import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import Header from './Header';
import Footer from './Footer';

import './index.css';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store)
ReactDOM.render(
	<Provider store = { store }>
		<div className="main-container">
			<Header/>
				
				<Form onSubmit ={(store)=>console.log(store)}/>
      	
	      	<Footer/>

		</div>
		
	</Provider>, document.getElementById('root'));
