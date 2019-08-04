import './header.css';
import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='header'>
				<h1>{ this.props.constant[0].title }</h1>
				<Nav param={this.props.constant[0]}/>
			</div>
			)
	}
}

class Nav extends React.Component{
render(){

	return(
	<nav className="navbar navbar-fixed-top">
		<div className="header-phones">
			<a href={this.props.param.velcomLink} >{this.props.param.velcom}</a>
			<a href={this.props.param.mtsLink} >{this.props.param.mts}</a>
		</div>
	</nav>)
}
}

export default connect(
state => ({constant: state.constants.constantsDB
})
)(Header);