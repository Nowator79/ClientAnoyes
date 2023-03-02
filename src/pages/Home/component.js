import React from 'react';
import Messages from './../../components/Messages/component'
import MessageForm from './../../components/MessageForm/component'

class Home extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="main">
				<Messages chat={this.props.chat} lastMessageRef={this.props.lastMessageRef}/>
				<MessageForm chat={this.props.chat}/>
			</div>
		);
	}
}
export default Home;
