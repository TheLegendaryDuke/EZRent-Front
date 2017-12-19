import React, { Component } from 'react'
import TADropDown from '../templates/TADropDown'

function map(cities) {
    var items = [];
    for(var i = 0; i < cities.length; i++) {
        var city = cities[i];
        items.push({key: city.name, value: city.name, text: city.name});
    }
    return items;
}

export default class MALSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: map(props.cities)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.data = map(nextProps.cities)
    }

    render() {
        return(
            <TADropDown
                data = {this.state.data}
                link = {"/mal/"}
                prompt = "Select a city"
                value = {this.props.city}
            />
        );
    }
}