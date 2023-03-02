class Message{
	constructor(id, message, sessid){
		this.id= id;
		this.message = message;
		this.sessid = sessid;
	}
	setLast(){
		this.isLast = true;
	}
	unSetLast(){
		this.isLast = false;
	}
}
export default Message;