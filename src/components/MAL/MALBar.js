import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import MALSearch from "./MALSearch";

export default class MALBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Menu style={{borderTopLeftRadius: 0, borderTopRightRadius: 0, margin: 0}}>
                <Menu.Item>
                    <MALSearch {...this.props}/>
                </Menu.Item>
            </Menu>
        )
    }
}