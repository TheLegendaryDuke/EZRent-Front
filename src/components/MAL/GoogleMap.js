import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';


class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        this.generateMarker = this.generateMarker.bind(this);
    }

    generateMarker = function (building) {
        return (<Marker name={building.address} position={{lat: building.latitude, lng: building.longitude}} onClick={this.onMarkerClick}/>)
    };

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
                activeMarker: null
            })
        }
    };

    render() {
        if(this.props.city != null) {
            return (
                <div style={{flex: 1}}>
                    <Map google={this.props.google} initialCenter={{
                        lat: this.props.city.latitude,
                        lng: this.props.city.longitude
                    }} onClick={this.onMapClicked}>
                        {this.props.buildings.map(this.generateMarker)}

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            )
        }
        return null;
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDVULv1ocSCXNJsX4C1vKbzlCsUoKqmdbk")
})(GoogleMap)