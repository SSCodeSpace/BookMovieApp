import React from 'react';
import {Button, FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core'
import {Input} from '@material-ui/core'
import '../../common/header/Form.css'

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={firstName:'',lastName:'', email:'',password:'',contactNumber:''};
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.contactNumber = React.createRef();
        
    }
    render(){
        return(
            <div className='app-form-container'>
            <form onSubmit={this.handleSubmit} className='app-form'>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="firstName" required>First Name</InputLabel>
                    <Input id="userName" variant="standard"/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="lastName" required>Last Name</InputLabel>
                    <Input id="lastName" variant="standard"/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="email" required>Email</InputLabel>
                    <Input id="email" variant="standard" type='email'/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="password" required>Password</InputLabel>
                    <Input id="password" variant="standard" type='password'/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="contactNo" required>Contact No.</InputLabel>
                    <Input id="ContactNo" variant="standard" type='phonenumber'/>
                </FormControl>
                <Button variant='contained' color='primary' className='app-form-element' >REGISTER</Button>

            </form>
            </div>            
        );
    }
}

export default LoginForm;