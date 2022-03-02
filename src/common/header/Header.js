import React from 'react';
import { Fragment } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import LoginForm from '../../screens/auth/LoginForm';
import RegistrationForm from '../../screens/auth/RegistrationForm';
import BasicTabs from '../header/TabPanel';
import ReactModal from 'react-modal';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAuthModal: false,
            
        }
    }
    handleLogin = () => {
        this.setState({ showAuthModal: true });
    }
    render() {
        return (
            
            <Fragment>
                <div className='app-header'>
                    <img src={logo} className='app-logo' alt='Movie logo' />
                    <div className='user-auth-actions'>
                        <Button variant='contained' color='default' onClick={this.handleLogin}> Login </Button>
                        <Button variant='contained' color='default'>Logout</Button>
                        <Button variant='contained' color='primary'>Book Show</Button>
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.showAuthModal}
                    contentLabel="Auth modal"
                    style={{ content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', transform: 'translate(-50%,-50%)' } }}
                    {...this.props}
                >
                    <BasicTabs {...this.props}/>
                </ReactModal>
             

            </Fragment>
        )
    }
}

export default Header;