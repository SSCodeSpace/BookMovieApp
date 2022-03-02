import React,{useState} from 'react';
import {Button, FormControl} from '@material-ui/core';
import {InputLabel} from '@material-ui/core'
import {Input} from '@material-ui/core'
import '../../common/header/Form.css'


export default function RegistrationForm(props)  {
    /*constructor(props){
        super(props);
        this.state={firstName:'',lastName:'', email:'',password:'',contactNumber:''};
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.contactNumber = React.createRef();
        
    }*/
    //render(){
    const signUpURL = `${props.baseUrl}signup`;
    console.log('signUpURL in registrationform '+signUpURL)
    const [registrationDetails,setRegistrationDetails]=useState({firstName:'',lastName:'',email:'',password:'',phoneNumber:''});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegistrationDetails(state => ({ ...state, [name]: value }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        registerUser();
        
    }

    async function registerUser(){
        const userDetails={
            first_name:registrationDetails.firstName,
            last_name:registrationDetails.lastName,
            email_address:registrationDetails.email,
            mobile_number:registrationDetails.phoneNumber,
            password:registrationDetails.password
        }

        try{
            const rawResponse = await fetch(signUpURL,{
                body:JSON.stringify(userDetails),
                method:'POST',
                headers:{
                    'Accept':'application/json;charset=UTF-8',
                    'Content-Type':'application/json;charset=UTF-8'
                }
            });

            const response = await rawResponse.json();

            if(rawResponse.ok){
                console.log("registration resposne is "+JSON.stringify(response));
            }else{
                const error = new Error();
                error.message=response.message || 'Something is wrong , please try again';
                throw error;
            }
        }catch(e){
            alert(`Error : ${e.message}`);
        }
        
    }

        return(
            <div className='app-form-container'>
            <form onSubmit={handleSubmit} className='app-form'>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="firstName" required>First Name</InputLabel>
                    <Input id="firstName" variant="standard" name='firstName' onChange={handleChange} value={registrationDetails.firstName}/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="lastName" required >Last Name</InputLabel>
                    <Input id="lastName" variant="standard" name='lastName'  onChange={handleChange} value={registrationDetails.lastName}/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="email" required>Email</InputLabel>
                    <Input id="email" variant="standard" type='email' name='email'  onChange={handleChange} value={registrationDetails.email}/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="password" required>Password</InputLabel>
                    <Input id="password" variant="standard" type='password' name='password'  onChange={handleChange} value={registrationDetails.password}/>
                </FormControl>
                <FormControl className='app-form-element' >
                    <InputLabel htmlFor="contactNo" required>Contact No.</InputLabel>
                    <Input id="ContactNo" variant="standard" type='phonenumber' name='phoneNumber'  onChange={handleChange} value={registrationDetails.phoneNumber}/>
                </FormControl>
                <Button variant='contained' color='primary' className='app-form-element' type='submit'>REGISTER</Button>

            </form>
            </div>            
        );
    //}
}
