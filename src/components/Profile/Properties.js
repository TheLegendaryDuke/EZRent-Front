import React, { Component } from 'react'
import HoverInput from '../templates/HoverInput'
import {Card} from 'semantic-ui-react'
import gql from "graphql-tag";
import {graphQLQueryComponentWithDefaultHandlers} from "../../util/graphqlUtils";

const profileQuery = gql`
            query properties($email: String!) {
              properties (email: $email) {
                address
                city {
                  name
                }
                postalCode
                verified
                suites {
                  rooms {
                    name
                    comment
                    roomType
                    rent
                    available
                    forRent
                    publicSpace
                  }
                  floor
                  name
                  rent
                  availability
                  negotiable
                }
              }
            }
        `;

export default class Properties extends Component {
    constructor(props) {
        super(props);
        this.state.email = props.email
    }

    render() {
        return graphQLQueryComponentWithDefaultHandlers(profileQuery,
            (data) => {
                return (
                    <Card>
                        <Card.Header>
                            Test
                        </Card.Header>
                        <Card.Content>
                            <Card>
                                <Card.Content>
                                    <HoverInput header={{size: "medium", content: "test"}} value={"test"}/>
                                </Card.Content>
                            </Card>
                        </Card.Content>
                    </Card>
                )},
            {email: this.state.email});
    }
}