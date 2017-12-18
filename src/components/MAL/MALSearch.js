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
            data: props.data.loading ? [] : map(props.data.cities),
            isLoading: props.data.loading
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.isLoading = nextProps.data.loading;
        if(!nextProps.data.loading) {
            this.state.data = map(nextProps.data.cities)
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