import React, { Component } from 'react'
import {Search} from 'semantic-ui-react';
import _ from 'lodash'

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
            cities: props.data.loading ? [] : map(props.data.cities),
            isLoading: props.data.loading,
            results: [],
            value: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.isLoading = nextProps.data.loading;
        if(!nextProps.data.loading) {
            this.state.cities = map(nextProps.data.cities)
        }
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.title });
        window.location.href = window.location.href.split('#')[0] + "mal/" + result.title;
    };

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value: value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.title);

            this.setState({
                isLoading: false,
                results: _.filter(this.state.cities, isMatch)
            });
        }, 500)
    };

    render() {
        return(
            <Search
                loading={this.state.isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={this.state.results}
                value={this.state.value}
                {...this.props}
            />
        );
    }
}