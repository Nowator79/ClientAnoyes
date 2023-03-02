import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class MessageForm extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			textarea: ""
		};
	}
	sendMessage(){
		var dataSend = { 
			message: this.state.textarea,
			sessid: cookies.get("sessid") 
		};
		this.props.chat.Socket.emit("messageSend", dataSend);
	}
	render() {
		return (
			<div className="messages_form">
				<Container className='h-100'>
				<Row className='h-100'>
					<div className='message_form__block'>
						<textarea 
							value={this.state.textarea} 
							onChange={(event)=>this.setState({
								textarea: event.target.value
							})} 
							placeholder='Сообщение...'
							></textarea>
						<div onClick={() => this.sendMessage()} className='right_block'>
							<button>Отпарвить</button>
						</div>
					</div>
				</Row>
				</Container>
			</div>
		);
	}
}
export default MessageForm;
