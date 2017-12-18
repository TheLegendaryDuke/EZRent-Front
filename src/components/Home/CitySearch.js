import React, { Component } from 'react'
import SearchImpl from '../templates/SearchImpl'

function map(cities) {
    var items = [];
    for(var i = 0; i < cities.length; i++) {
        var city = cities[i];
        items.push({title: city.name});
    }
    return items;
}

export default class CitySearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: map(props.cities),
            isLoading: props.isLoading
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.isLoading = nextProps.isLoading;
        if(!nextProps.isLoading) {
            this.state.data = map(nextProps.cities)
        }
    }

    render() {
        return(
            <SearchImpl
                isLoading = {this.state.isLoading}
                data = {this.state.data}
                link = {window.location.href.split('#')[0] + "mal/"}
            />
        );
    }
}