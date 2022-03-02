import React, { useState } from 'react';
import { Button, FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import '../../common/header/Form.css'


export default function LoginForm(props) {
    /*constructor(props) {
        super(props);
        this.state = { userName: '', password: '' };
        this.userName = React.createRef();
        this.password = React.createRef();
        
    }*/

    const [loginDetails, setLoginDetails] = useState({ "username": "", "password": "" });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginDetails(state => ({ ...state, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange=(event)=>{
        event.preventDefault();
        loginUser();
    }

    async function loginUser(){
        const userDetails={
            "username":loginDetails.username,
            "password":loginDetails.password
        }
    }

    return (
        <div className='app-form-container'>
            <form className='app-form'>
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