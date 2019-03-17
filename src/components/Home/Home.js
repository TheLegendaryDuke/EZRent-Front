import React, { Component } from 'react'
import '../../css/home.css'
import CitySearch from "./CitySearch";
import {Link} from 'react-router-dom'
import jwt_decode from "jwt-decode";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {cities: props.cities}
    }

    componentWillReceiveProps(nextProps) {
        this.state.cities = nextProps.cities
    }

    render() {
        var jwt = localStorage.getItem('jwt');
        try {
            jwt = jwt_decode(jwt)
        }catch (e) {
            jwt = null
        }

        var link;

        if(jwt) {
            link = "/profile/properties";
        }else {
            link = "/register";
        }

        const sectionStyle= {
            textAlign:'center',
            paddingTop: '40vh',
            paddingBottom: '40vh'
        };

        return (
            <div className="accordion">
                <section id="tenant" style={sectionStyle}>
                    <h2><a href="#tenant">I'm looking for a place</a></h2>
                    <div>
                        <CitySearch cities={this.state.cities} {...this.props}/>
                    </div>
                </section>
                <section id="landlord" style={sectionStyle}>
                    <h2><a href="#landlord">I have a place for rent</a></h2>
                    <div>
                        <Link to={link}>
                            Go
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}