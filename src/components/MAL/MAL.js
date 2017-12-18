import React, { Component } from 'react'
import MALMain from './MALMain'
import MALBar from './MALBar'


export default class MAL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: props.match.params.city,
            cities: props.cities
        }
    }

    render() {
        return(
            <div>
                <MALBar city={this.state.city}/>
                <MALMain city={this.state.city}/>
            </div>
        )
    }
}