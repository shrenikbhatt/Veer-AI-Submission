import React, { Component } from 'react';
import { Container, Table, Row } from 'reactstrap'
import { BASE_URL } from '../constants'
import Axios from 'axios';


// This component lists the posted data from the contact page, arranged into a table ordered from oldest to newest.
// This works by making an AJAX call through axios that gets the data at the designated url and then maps the data to rows
// on a table.

var list = [];

class ContactList extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: list
        }
    }

    render(){
        Axios.get(BASE_URL+'/contact/')
            .then(res => {
                list = res.data;
                this.setState({
                    data: list
                });
            });
        const listItem = this.state.data.map((d, i) => <tr key={i}><th>{d["name"]}</th><td>{d["number"]}</td></tr>)
        return(
            <div className="ContactList">
                <Container className="mt-2">
                    <Table dark>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem}
                        </tbody>
                    </Table>
                </Container>
                
            </div>
        );
    }
}

export default ContactList