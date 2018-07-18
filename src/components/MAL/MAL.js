import React, { Component } from 'react'
import MALMain from './MALMain'
import MALBar from './MALBar'




export default class MAL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: props.match.params.city
        }
    }

    render() {
        return(
            <div style={{flex: 1, flexFlow: 'row', position: "relative"}}>
                <MALBar {...this.props} city={this.state.city}/>
                <MALMain city={this.state.city} cities={this.props.cities}/>
            </div>
        )
    }
}