import React, { Component } from 'react'
import {Search} from 'semantic-ui-react';
import _ from 'lodash'

export default class SearchImpl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isLoading: props.isLoading,
            results: [],
            value: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.isLoading = nextProps.isLoading;
        if(!nextProps.isLoading) {
            this.state.data = nextProps.data;
        }
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.title });
        window.location.href = this.props.link + result.title;
    };

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value: value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.title);

            this.setState({
                isLoading: false,
                results: _.filter(this.state.data, isMatch)
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
            />
        );
    }
}