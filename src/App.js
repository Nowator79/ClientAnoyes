import {getKey} from './helpers.js'
import Chat from './classes/chat';
import Cookies from 'universal-cookie';
import React, { createRef  } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/component.js";
import Erorr from "./pages/Erorr/component";
import About from "./pages/About/component.js";
import Header from "./components/Header/component.js";
import Footer from "./components/Footer/component.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import io from 'socket.io-client';

const cookies = new Cookies();
const socket = io("http://127.0.0.1:4001");

const refStack = [];

class App extends React.Component{

	constructor(prop){
		super(prop);	
		this.lastMessage = createRef(null);
		this.state = {
			isConnected: socket.connected,
			chat: new Chat(socket)
		};
		
	}
	componentDidMount() {
		socket.on('connect', () => {
			if(!cookies.get("sessid")){
				cookies.set("sessid", getKey(9), '/');
			}
			let newState = Object.assign({}, this.state);
			newState.isConnected = true;
			this.setState(newState);
			socket.on('disconnect', () => {
				let newState = Object.assign({}, this.state);
				newState.isConnected = false;
				this.setState(newState);
			});

			socket.on('messageSend', (data) => {
				this.state.chat.addMessage(data.data.message, data.data.sessid);
				let newState = Object.assign({}, this.state);
				this.setState(newState);
			});

			var dataSend = { 
				sessid: cookies.get("sessid") 
			};
			console.log("connection");
			socket.emit("loginUser", dataSend);
		});
	}
	componentWillUnmount(){
		socket.off('connect');
		socket.off('disconnect');
		socket.off('messageSend');
	}
	componentDidUpdate() {
		if(this.lastMessage.current){
			var scroll = this.lastMessage.current.parentNode;
			scroll.scrollTo({
				top: scroll.scrollHeight,
				behavior: 'smooth'
			});
		}
	}
	render(){
		return(
			<div>
				<Header />
				{this.state.isConnected &&
					<Router>
						<Routes>
							<Route exact path='/' element={
								<Home 
									chat={this.state.chat} 
									lastMessageRef={this.lastMessage} 

									/>
							} />
							<Route exact path='/about' element={<About />} />
						</Routes>
					</Router>
				}
				{!this.state.isConnected&&
					<Erorr/>
				}
				<Footer />
			</div>
		)
	}
	
}
export default App;