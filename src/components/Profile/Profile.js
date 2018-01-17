import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import { Menu, Grid } from 'semantic-ui-react'
import Info from "./Info";
import Properties from "./Properties"
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import App from "../App";

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
const PptWithData = graphql(profileQuery)(Properties);

export default class Profile extends Component {
    constructor(props) {
        var option;
        super(props);
        switch (props.match.params.option) {
            case "info":
                option = "Info";
                break;
            case "properties":
                option = "Properties";
                break;
            default:
                option = "Info";
        }
        this.state = {activeItem: option};
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Grid columns={2} style={{flex: 1}}>
                <Grid.Column width={4}>
                    <Menu pointing secondary vertical>
                        <Menu.Item name='Info' active={activeItem === 'Info'} onClick={this.handleItemClick} />
                        <Menu.Item name='Properties' active={activeItem === 'Properties'} onClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>
                <Grid.Column>
                    <Switch>
                        <Route exact path={"/profile/info"} component={Info}/>
                        <Route exact path={"/profile/properties"} component={PptWithData}/>
                    </Switch>
                </Grid.Column>
            </Grid>
        );
    }
}