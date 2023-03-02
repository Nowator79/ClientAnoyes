import * as React from 'react';
import Container from 'react-bootstrap/Container';
class Header extends React.Component{
	render() {
		return (
			<div className="header">
				<Container className='h-100'>
					<a href='/' className='logo-svg'>Anoyes chat</a>
				</Container>
			</div>
		);
	}
}
export default Header;
