import React, { Component } from 'react'
import HoverInput from '../templates/HoverInput'
import {Card} from 'semantic-ui-react'

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
            <Card>
                <Card.Header>
                    Test
                </Card.Header>
                <Card.Content>
                    <Card>
                        <Card.Content>
                            <HoverInput header={{size: "medium", content: "test"}} value={"test"}/>
                        </Card.Content>
                    </Card>
                </Card.Content>
            </Card>
        )
    }
}