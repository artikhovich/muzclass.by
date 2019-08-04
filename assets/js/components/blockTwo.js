import './blockTwo.css';
import React from 'react';
import {connect} from 'react-redux';

class BlockTwo extends React.Component{
	render(){
		return(
			<div className='block-two'>
			{this.props.blockTwo.map(
				(block) => 
				<div key={block.id} className='block-two-item'>
				<h3>{block.title}</h3>
				<p>{block.text}</p>
				</div>
				)}
			</div>)
	}
}
export default connect(
state => ({
	blockTwo: state.constants.constantsDB[1].blockTwo
}))(BlockTwo);