import React, { Component } from 'react'
import '../../css/home.css'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CitySearch from "./CitySearch";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {cities: props.cities}
    }

    componentWillReceiveProps(nextProps) {
        this.state.cities = nextProps.cities
    }

    render() {
        return (
            <div className="accordion">
                <section id="tenant">
                    <h2><a href="#tenant">I'm looking for a place</a></h2>
                    <div>
                        <CitySearch cities={this.state.cities}/>
                    </div>
                </section>
                <section id="landlord">
                    <h2><a href="#landlord">I have a place for rent</a></h2>
                    <div>
                        <a href="/profile">Go</a>
                    </div>
                </section>
            </div>
        );
    }
}