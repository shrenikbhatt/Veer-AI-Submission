import React, { Component } from 'react';
import { Button, Form, Alert, Container, FormGroup, Label, Input } from 'reactstrap'
import Axios from 'axios';
import { BASE_URL } from '../constants';

// This is the Input Component, where the user inputs text into an input box and upon submit,
// the server will either return true, if input was Foo or Bar, or false otherwise.

class RandInput extends Component{
    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            result: ""
        };
    }

    submitHandler(e){
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = {
            "text": formdata.get('text')
        }
        Axios.post(BASE_URL+'/user-input/', data)
            .then(function(response){
                this.setState({
                    result: response.data.message.toString()
                })  
                console.log(response.data.message) 
            }.bind(this))
            .catch(function(error){
                console.log(error);
            }.bind(this))        
    }

    render(){
        return(
            <div className="RandInput">
                <Container>
                    <p>{this.state.result}</p>
                    <Form onSubmit={this.submitHandler} id="input-form">
                        <FormGroup>
                            <Label for="text">Input Text</Label>
                            <Input type="text" required name="text" />
                        </FormGroup>
                        <Button outline color="info">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default RandInput;