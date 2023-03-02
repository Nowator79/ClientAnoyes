import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Message from '../Message/component';
class Messages extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="messages">
				<Container className='h-100'>
					<div className='messages_content'>
						{
							this.props.chat.messeges.map((element)=> 
								<Message key={element.id} message={element} lastMessageRef={this.props.lastMessageRef}/>
							) 
						}
					</div>
				</Container>
			</div>
		);
	}
}
export default Messages;
