import './footer.css'
import React from 'react'
import {connect} from 'react-redux'

class Footer extends React.Component{
	render(){
		return(<div className='footer'>footer: {this.props.footer.address}</div>)
	}
}
export default connect(state => ({ 
	footer: state.constants.constantsDB[0]
	})
)(Footer);
