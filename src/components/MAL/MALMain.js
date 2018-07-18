import React, {Component} from 'react'
import {Grid, List} from 'semantic-ui-react'
import GoogleMap from './GoogleMap'
import {graphQLQueryComponentWithDefaultHandlers} from "../../util/graphqlUtils";
import gql from "graphql-tag";

const query = gql`
        query buildings($city: String!){
          buildings(city: $city) {
            id
            address
            longitude
            latitude
          }
        }
    `;

export default class MALMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: props.city,
            selectedPlace: null
        };

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.select = this.select.bind(this);
        this.generateListItem = this.generateListItem.bind(this);
        this.clearSelect = this.clearSelect.bind(this);
    }

    onMarkerClick = function(props, marker, e) {
        this.setState({
            selectedPlace: props.name
        });
    };

    select = function(e) {
        this.setState({selectedPlace: e.currentTarget.dataset.value});
    };

    clearSelect = function(e) {
        this.setState({selectedPlace: null});
    };

    generateListItem = function (building) {
        return (<List.Item key={building.id}><div onMouseOver={this.select} onMouseOut={this.clearSelect} data-value={building.id}>{building.address}</div></List.Item>)
    };

    render() {
        var city = null;

        for (var i = 0; i < this.props.cities.length; i++) {
            const c = this.props.cities[i];
            if (c.name === this.state.city) {
                city = c;
                break;
            }
        }

        return graphQLQueryComponentWithDefaultHandlers(
            query,
            (data) => {
                this.state.buildings = data.buildings;

                return (
                    <Grid columns={2} style={{position: "absolute", height: "100%", width: "100%", margin: 0}}>
                        <Grid.Column width={11} style={{padding: 0}}>
                            <GoogleMap
                                city={city}
                                buildings={this.state.buildings}
                                selectedPlace={this.state.selectedPlace}
                                onMarkerClick={this.onMarkerClick}
                                onMapClicked={this.clearSelect}
                            />
                        </Grid.Column>
                        <Grid.Column width={5} style={{padding: 0, height: "100%"}}>
                            <List divided style={{overflowY: "scroll", height: "100%"}}>
                                {this.state.buildings.map(this.generateListItem)}
                            </List>
                        </Grid.Column>
                    </Grid>)
            },
            {city: this.props.city})
    }
}