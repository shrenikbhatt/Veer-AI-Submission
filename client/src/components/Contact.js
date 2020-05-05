import React, { Component } from 'react';
import { Button, Form, Alert, Container, FormGroup, Label, Input } from 'reactstrap'

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
        this.setState({submitSuccess: true});
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
                            </FormGroup>
                            <Button outline color="info">Submit</Button>
                        </Form>
                </Container>
            </div>
        )
    }
}

export default Contact;