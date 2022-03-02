import React, { useState } from 'react';
import { Button, FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import '../../common/header/Form.css'
import { useDispatch } from 'react-redux';


export default function LoginForm(props) {
    /*constructor(props) {
        super(props);
        this.state = { userName: '', password: '' };
        this.userName = React.createRef();
        this.password = React.createRef();
        
    }*/
    const loginURL = `${props.baseUrl}auth/login`;
    const[authModalFlag,setAuthModalFlag] = useState(props.showAuthModal);
    const [loginDetails, setLoginDetails] = useState({ "username": "", "password": "" });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginDetails(state => ({ ...state, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser();
        //loginDispatch(window.sessionStorage.getItem('access-token'))
    }

    const loginDispatch=(accessToken)=>{
        useDispatch({"type":"SAVE_LOGIN","payload":accessToken})
    }

    async function loginUser() {
        const authParam = window.btoa(`${loginDetails.username}:${loginDetails.password}`);
        console.log('authparam '+authParam)

        const userDetails = {
            "username": loginDetails.username,
            "password": loginDetails.password
        }
        try {
            const rawResponse = await fetch(loginURL, {
                "method": "POST",
                'headers': {
                    "Accept": "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                    'authorization': `Basic ${authParam}`
                }
            });
            const response = await rawResponse.json();
            if(rawResponse.ok){
                window.sessionStorage.setItem('user-details',JSON.stringify(response));
                window.sessionStorage.setItem('access-token',rawResponse.headers.get('access-token'))
                console.log('Login successful');
                
                props.closeAuthFun();
            }

        } catch (e) {
            alert(e.message);
        }

    }

    return (
        <div className='app-form-container'>
            <form className='app-form' onSubmit={handleSubmit}>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="userName" required>Username</InputLabel>
                    <Input id="userName" variant="standard" name="username" value={loginDetails.username} onChange={handleChange} />
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="password" required>Password</InputLabel>
                    <Input id="password" variant="standard" name="password" value={loginDetails.password} onChange={handleChange} />
                </FormControl>
                <Button variant='contained' color='primary' className='app-form-element' type='submit' >LOGIN</Button>

            </form>
        </div>
    );
}