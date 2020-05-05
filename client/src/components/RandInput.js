import React, { Component } from 'react';
import { Button, Form, Alert, Container, FormGroup, Label, Input } from 'reactstrap'

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
        console.log(data);     
        this.setState({
            result: data.text
        })   
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