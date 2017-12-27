import React, { Component } from 'react'
import MALMain from './MALMain'
import MALBar from './MALBar'
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";

function generateDataedComponent(city) {
    const query = gql`
            query buildings($city: String!){
              buildings(city: $city) {
                address
              }
            }
        `;

    return graphql(query, {options: {variables: {city: city}}})(MALMain);
}

export default class MAL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: props.match.params.city,
            MALWithData: generateDataedComponent(props.match.params.city)
        }
    }

    render() {
        const MALWithData = this.state.MALWithData

        return(
            <div style={{flex: 1, flexFlow: 'row', position: "relative"}}>
                <MALBar {...this.props} city={this.state.city}/>
                <MALWithData city={this.state.city} cities={this.props.cities}/>
            </div>
        )
    }
}