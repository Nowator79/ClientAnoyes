import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io("http://192.168.0.15:4001");

function App() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [lastPong, setLastPong] = useState(null);

	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		socket.on('pong', (data) => {
			setLastPong(data["date"]);
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
			socket.off('pong');
		};
	}, []);

	const sendPing = () => {
		socket.emit("pong", { a: "b", c: [] });
	}

	return (
		<div>
			<p>Connected: { '' + isConnected }</p>
			<p>Last pong: { lastPong || '-' }</p>
			<button onClick={ sendPing }>Send ping</button>
		</div>
	);
}

export default App;