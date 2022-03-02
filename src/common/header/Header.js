import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import LoginForm from '../../screens/auth/LoginForm';
import RegistrationForm from '../../screens/auth/RegistrationForm';
import BasicTabs from '../header/TabPanel';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

export default function Header(props) {
    /* constructor(props) {
         super(props);
         this.state = {
             showAuthModal: false,
             
         }
     }*/
    const [authModalFlag, setAuthModal] = useState(false);
    const [bookShowFlag, setBookShowFlag] = useState(false);

    const handleLogin = () => {
        setAuthModal(true);
    }
    const closeAuthModal = () => {
        // this.setState({showAuthModal:false})
        setAuthModal(false);
    }
    useEffect(()=>{
        setBookShowFlag(props.showBookShow);
    })
    const displayBookShow=()=>{
        setBookShowFlag(true);
    }
    const accessToken = window.sessionStorage.getItem('access-token');

    /* useEffect(()=>{
         const accessToken = window.sessionStorage.getItem('access-token');
         if(accessToken===""){
            
         }else{
             useDispatch({"type":"SAVE_LOGIN","payload":accessToken});
         }
     })*/

    return (

        <Fragment>
            <div className='app-header'>
                <img src={logo} className='app-logo' alt='Movie logo' />
                <div className='user-auth-actions'>
                    if({accessToken})===""{
                    <Button variant='contained' color='default' onClick={handleLogin}> Login </Button>
                    }else{
                        <Button variant='contained' color='default'>Logout</Button>
                    }if({bookShowFlag}){
                        <Button variant='contained' color='primary'>Book Show</Button>
                    }
                </div>
            </div>
            <ReactModal
                isOpen={authModalFlag}
                contentLabel="Auth modal"
                style={{ content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', transform: 'translate(-50%,-50%)' } }}
                {...props}
            >
                <BasicTabs {...props} closeAuthFun={closeAuthModal}  setBookShowFlag={setBookShowFlag}/>
            </ReactModal>


        </Fragment>
    )
}


