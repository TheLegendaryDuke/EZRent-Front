import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import MapAndList from './MapAndList'
import MALSearch from './MALSearch'


export default class MAL extends Component {

    constructor(props) {
        super(props);
        this.state = {city: props.match.params.city}
    }

    render() {
        return(
            <div>
                <MALSearch/>
                <MapAndList city={this.state.city}/>
            </div>
        )
    }
}