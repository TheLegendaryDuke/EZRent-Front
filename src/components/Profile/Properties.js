import React, { Component } from 'react'
import HoverInput from '../templates/HoverInput'

export default class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.data.loading) {
            this.setState({
                buildings: nextProps.data.buildings
            })
        }
    }

    render() {
        return(
            <HoverInput header={{size: "medium", content: "test"}} value={"test"}/>
        )
    }
}