import React, { Component } from 'react';
import { variables } from './Endpoints.js';

export class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EventDetails: []
        }
    }
    getEventDetails() {
        fetch(variables.API_URL + 'EventDetails/1')
            .then(response => response.json())
            .then(data => {
                this.setState({ EventDetails: data });
            });
    }
}