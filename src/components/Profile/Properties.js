import React, { Component } from 'react'
import HoverInput from '../templates/HoverInput'

export default class Properties extends Component {
    render() {
        return(
            <HoverInput header={{size: "medium", content: "test"}} value={"test"}/>
        )
    }
}