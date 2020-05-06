import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';

import axios from 'axios';
import { API_KEY } from '../constants'

// This is the Data Component, which gets live stock data from the AlphaVantage api. It is currently set
// to get data for the IBM stock at 5 minute intervals. After clicking the button, a table should pop up with
// all the data.

var row = [];

class Data extends Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            data: row
        }
    }

    clickHandler(){
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey='+API_KEY)
            .then(res => {
                var data = res.data
                var entries = Object.entries(data["Time Series (5min)"]);
               for (const entry of entries){
                    row.push(entry);
                }

                this.setState({
                    data: row
                });
            }); 
    }

    render(){
        const listItems = this.state.data.map((d, i) => <tr key={i}><th>{d["0"]}</th><td>{d["1"]["1. open"]}</td><td>{d["1"]["2. high"]}</td><td>{d["1"]["3. low"]}</td><td>{d["1"]["4. close"]}</td><td>{d["1"]["5. volume"]}</td></tr>)
        return(
            <div className="Data">
                <Container>
                    <p>Clicking this button will fetch the latest 100 stock prices from IBM at intervals of 5 minutes. The data will take about a second to format into the table below.</p>
                    <Button className="mb-2" outline color="info" onClick={this.clickHandler}>Click Here</Button>
                    <Table dark>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Open</th>
                                <th>High</th>
                                <th>Low</th>
                                <th>Close</th>
                                <th>Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

export default Data