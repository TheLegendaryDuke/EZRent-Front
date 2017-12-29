import React, {Component} from 'react'
import {Grid, List} from 'semantic-ui-react'
import GoogleMap from './GoogleMap'

export default class MALMain extends Component {
    constructor(props) {
        super(props);
        this.state = {city: props.city,
            buildings: props.data.loading ? [] : props.data.buildings,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}};

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        this.hover = this.hover.bind(this);
        this.generateListItem = this.generateListItem.bind(this);
    }

    onMarkerClick = function(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onMapClicked = function(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                selectedPlace: null
            })
        }
    };

    componentWillReceiveProps(nextProps) {
        this.state.buildings = nextProps.data.buildings;
    }

    hover = function(e) {
        alert(e.currentTarget.dataset.value);
    };

    generateListItem = function (building) {
        return (<List.Item key={building.id}><div onMouseOver={this.hover} data-value={building.id}>{building.address}</div></List.Item>)
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

        return (
            <Grid columns={2} style={{position: "absolute", height: "100%", width: "100%", margin: 0}}>
                <Grid.Column width={11} style={{padding: 0}}>
                    <GoogleMap
                        city={city}
                        buildings={this.state.buildings}
                        showingInfoWindow={this.state.showingInfoWindow}
                        activeMarker={this.state.activeMarker}
                        selectedPlace={this.state.selectedPlace}
                        onMarkerClick={this.onMarkerClick}
                        onMapClicked={this.onMapClicked}
                    />
                </Grid.Column>
                <Grid.Column width={5} style={{padding: 0, height: "100%"}}>
                    <List divided style={{overflowY: "scroll", height: "100%"}}>
                        {this.state.buildings.map(this.generateListItem)}
                    </List>
                </Grid.Column>
            </Grid>
        )
    }
}