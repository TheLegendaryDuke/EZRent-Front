import React, { Component } from 'react'

export default class MALMain extends Component {
    constructor(props) {
        super(props)
        this.state = {city: props.city}
    }

    render() {
        return(
            <div>
                {this.state.city}
            </div>
        )
    }
}