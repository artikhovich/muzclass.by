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
				<Nav param={this.props.headDB}/>
			</div>
			)
	}
}

class Nav extends React.Component{
render(){

	return(
	<nav className="navbar navbar-fixed-top">
		<div className="header-phones">
			<div className='brand'>
				<h1>{ this.props.param.title }</h1>
			</div>
			<a href={this.props.param.velcomLink} >{this.props.param.velcom}</a>
			<a href={this.props.param.mtsLink} >{this.props.param.mts}</a>
		</div>
	</nav>)
}
}

export default connect(
state => ({headDB: state.constants.constantsDB[0]
})
)(Header);