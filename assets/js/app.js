require('../css/bootstrap.min.css');
require('../css/app.css');
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import Header from './components/header';
import BlockTwo from './components/blockTwo';
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends React.Component{
	render(){
		return (
			<div className='app'>
			<Header />
			<BlockTwo />
			</div>
			) 
	}
}

ReactDOM.render(<Provider store={store}><App /></Provider>,
	document.getElementById('app')
);

