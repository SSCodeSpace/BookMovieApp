import React from 'react';
import { Fragment } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import {Button} from '@material-ui/core';
import LoginForm from '../../screens/auth/LoginForm';
import RegistrationForm from '../../screens/auth/RegistrationForm';

export default function Header(){
    return(
        <Fragment>
        <div className='app-header'>
            <img src={logo} className='app-logo' alt='Movie logo'/>
            <div className='user-auth-actions'>
                <Button variant='contained' color='default'> Login </Button>
                <Button variant='contained' color='default'>Logout</Button>
                <Button variant='contained' color='primary'>Book Show</Button>
            </div>
        </div>
        <LoginForm/>
        <RegistrationForm/>
        </Fragment>
    )
}