import * as React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Message extends React.Component{
	constructor(props){
		super(props);
		this.classMessage = "message";
	}
	render() {
		return (
			<div ref={this.props.message.isLast?this.props.lastMessageRef:null}  className={this.props.message.sessid == cookies.get("sessid")? this.classMessage : this.classMessage + " " + "received"}>
				<div className='message_box'>
					{this.props.message.message}
				</div>
			</div>
		);
	}
}
export default Message;
