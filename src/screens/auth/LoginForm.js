import React from 'react';
import { Button, FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import '../../common/header/Form.css'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', password: '' };
        this.userName = React.createRef();
        this.password = React.createRef();
        
    }
    handleSubmit(){


    }
    render() {
        return (
            <div className='app-form-container'>
                <form  className='app-form'>
                    <FormControl className='app-form-element' >
                        <InputLabel htmlFor="userName" required>Username</InputLabel>
                        <Input id="userName" variant="standard" />
                    </FormControl>
                    <FormControl className='app-form-element' >
                        <InputLabel htmlFor="password" required>Password</InputLabel>
                        <Input id="password" variant="standard" />
                    </FormControl>
                    <Button variant='contained' color='primary' className='app-form-element' >LOGIN</Button>

                </form>
            </div>
        );
    }
}

export default LoginForm;