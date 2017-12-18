import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MALBar extends Component {
    constructor(props) {
        super(props);
        this.state = {city: props.city}
    }

    render() {
        return(
            <Menu style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                <Menu.Item>

                </Menu.Item>
            </Menu>
        )
    }
}