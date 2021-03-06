import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react';


class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: props.selectedPlace,
            showingInfoWindow: false,
            infoWindowContent: null
        };

        // binding this to event-handler functions
        this.generateMarker = this.generateMarker.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedPlace: nextProps.selectedPlace
        });
        if(nextProps.selectedPlace) {
            this.setState({
                showingInfoWindow: true
            })
        }else {
            this.setState({
                showingInfoWindow: false
            })
        }
    }

    generateMarker = function (building) {
        const {google} = this.props;

        if(google) {
            const smaller = {
                url: "../../../marker.png",
                scaledSize: new google.maps.Size(20, 34),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(10, 34)
            };

            const bigger = {
                url: "../../../marker.png",
                scaledSize: new google.maps.Size(24, 40.8),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(12, 40.8)
            };

            if(this.state.selectedPlace && this.state.selectedPlace === building.id) {
                this.setState({
                    infoWindowContent: building.address
                });

                return (<Marker name={building.id}
                                key={building.id}
                                address={building.address}
                                position={{lat: building.latitude, lng: building.longitude}}
                                onClick={this.props.onMarkerClick}
                                icon={bigger}
                />)
            }else {
                return (<Marker name={building.id}
                                key={building.id}
                                address={building.address}
                                position={{lat: building.latitude, lng: building.longitude}}
                                onClick={this.props.onMarkerClick}
                                icon={smaller}
                />)
            }
        }
    };

    render() {
        if(this.props.city != null && this.props.google) {
            return (
                <div style={{flex: 1}}>
                    <Map google={this.props.google} initialCenter={{
                        lat: this.props.city.latitude,
                        lng: this.props.city.longitude
                    }} onClick={this.props.onMapClicked}>
                        {this.props.buildings.map(this.generateMarker)}

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.infoWindowContent ? this.state.infoWindowContent : ""}</h1>
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