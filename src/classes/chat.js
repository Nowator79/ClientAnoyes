import Message from './message'
class Chat{
	constructor(Socket){
		this.messeges = [];
		this.NextId = 0;
		this.Socket = Socket;
	}
	addMessage(messegeText, userid){
		var message = new Message(this.NextId++, messegeText, userid);
		this.messeges.push(message);
		this.updete();
	}
	updete(){
		var lastMessages = this.messeges.filter(function(message){
			return message.isLast;
		});
		lastMessages.forEach(message => {
			message.unSetLast();
		});
		this.messeges.at(-1).setLast();
	}
}
export default Chat;