import React, {Component} from 'react'
import {GoogleApiWrapper, Map} from 'google-maps-react';


class GoogleMap extends Component {
    render() {
        if(this.props.city != null) {
            return (
                <div style={{flex: 1}}>
                    <Map google={this.props.google} initialCenter={{
                        lat: this.props.city.latitude,
                        lng: this.props.city.longitude
                    }}/>
                </div>
            )
        }
        return null;
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDVULv1ocSCXNJsX4C1vKbzlCsUoKqmdbk")
})(GoogleMap)