import React, { Component } from 'react'
import {Grid, List} from 'semantic-ui-react'
import GoogleMap from './GoogleMap'

export default class MALMain extends Component {
    constructor(props) {
        super(props);
        this.state = {city: props.city}
    }

    render() {
        var city = null;

        for(var i = 0; i < this.props.cities.length; i++) {
            const c = this.props.cities[i];
            if(c.name === this.state.city) {
                city = c;
                break;
            }
        }

        return(
            <Grid columns={2} style={{position: "absolute", height: "100%", width: "100%", margin: 0}} >
                <Grid.Column width={11} style={{padding: 0}}>
                    <GoogleMap city={city}/>
                </Grid.Column>
                <Grid.Column width={5} style={{padding: 0, height: "100%"}}>
                    <List divided style={{overflowY:"scroll", height: "100%"}}>
                        {/*{this.props.cities.map(function (city) {*/}
                            {/*return (<List.Item><div key={city.name}>{city.name}</div></List.Item>)*/}
                        {/*})}*/}
                    </List>
                </Grid.Column>
            </Grid>
        )
    }
}