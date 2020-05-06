import React, { Component } from 'react';
import { Button, Form, Alert, Container, FormGroup, Label, Input } from 'reactstrap'
import { BASE_URL } from '../constants'
import Axios from 'axios';

// This is the Contact component, which allows user to enter a name and phone number
// which is then sent to PostgreSQL database through Axios (AJAX call).

// Button click (or pressing enter) will call the submit handler, which extracts form data and posts it to the designated url.

class Contact extends Component{
    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state={
            submitSuccess: false
        }
    }

    submitHandler(e) {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = {
            "name": formdata.get('name'),
            "number": formdata.get('number')
        }
        console.log(data);
        Axios.post(BASE_URL+'/contact/', data)
            .then(function(response){
                this.setState({submitSuccess: true});
                console.log(response);
            }.bind(this))
            .catch(function(error){
                console.log(error);
            }.bind(this))
            document.getElementById("contact-form").reset();
        
    }
    render(){
        const submitSuccess = this.state.submitSuccess;
        return(
            <div className="Contact">
                <Container>
                    {submitSuccess
                        ?<Alert color="success">Submitted!</Alert>
                        :<div></div>
                        }
                        <Form onSubmit={this.submitHandler} id="contact-form">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" required name="name" placeholder="John Smith" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="number">Contact Number</Label>
                                <Input type="tel" required name="number" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                                <p>Format: 123-456-7890 (include the dashes)</p>
                            </FormGroup>
                            <Button outline color="info">Submit</Button>
                        </Form>
                </Container>
            </div>
        )
    }
}

export default Contact;