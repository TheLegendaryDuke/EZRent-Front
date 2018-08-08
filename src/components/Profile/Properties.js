import React, {Component} from 'react'
import HoverInput from '../templates/HoverInput'
import {Card, Header, Icon} from 'semantic-ui-react'
import gql from "graphql-tag";
import {graphQLQueryComponentWithDefaultHandlers} from "../../util/graphqlUtils";
import { Mutation } from "react-apollo";

const profileQuery = gql`
            query properties($email: String!) {
              properties (email: $email) {
                id
                address
                city {
                  name
                }
                postalCode
                verified
                suites {
                  rooms {
                    id
                    name
                    comment
                    roomType
                    rent
                    available
                    publicSpace
                  }
                  id
                  floor
                  name
                  rent
                  available
                  rentNegotiable
                }
              }
            }
        `;

const roomMutation = gql`
    mutation updateRoom($room: RoomInput!) {
        updateRoom(room: $room) {
            id
            name
            comment
            roomType
            rent
            available
            publicSpace
        }
    }
`;

const roomTypes = [{text:"master bedroom", value: "MASTER"},
    {text: "bedroom", value: "BEDROOM"},
    {text: "washroom", value: "WASHROOM"},
    {text: "kitchen", value: "KITCHEN"}];

const trueAndFalse = [{text: "yes", value: true}, {text: "no", value: false}];

export default class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {email: props.email}
    }

    render() {
        return graphQLQueryComponentWithDefaultHandlers(profileQuery,
            (data) => {
                var components = [];
                if(data.properties.length === 0) {
                    components.push(<h3>You do not have any properties</h3>)
                }else {
                    for(var i = 0; i < data.properties.length; i++) {
                        var building = [];
                    }
                }

                return (
                    <div style={{width: '100%'}}>
                        <Header as={'h1'} icon textAlign={'center'} style={{marginTop: 10}}>
                            <Icon name={'building outline'} circular/>
                            <Header.Content>My Properties</Header.Content>
                        </Header>
                        {
                            data.properties.length === 0 ? <h3>You do not have any properties</h3> :
                                data.properties.map((building) => (
                                    <Card style={{width: '100%'}} key={building.id}>
                                        <Card.Content>
                                            <HoverInput header={{as: "h5", content: "Address: "}} value={building.address}/>
                                            <HoverInput header={{as: "h5", content: "Postal Code: "}} value={building.postalCode}/>
                                            <HoverInput header={{as: "h5", content: "City: "}} value={building.city.name}/>
                                            <HoverInput header={{as: "h5", content: "Verified: "}} type={"dropdown"} options={trueAndFalse} value={building.verified} />
                                            {
                                                building.suites.map((suite) => (
                                                    <Card style={{width: '100%'}} key={suite.id}>
                                                        <Card.Header as={'h4'}>
                                                            Suites
                                                        </Card.Header>
                                                        <Card.Content>
                                                            <HoverInput header={{as: 'h5', content: "Floor: "}} value={suite.floor}/>
                                                            <HoverInput header={{as: 'h5', content: "Name: "}} value={suite.name}/>
                                                            <HoverInput header={{as: 'h5', content: "Rent (enter 0 if the suite is not for rent on its own): "}} value={suite.rent}/>
                                                            <HoverInput header={{as: 'h5', content: "Number Available: "}} value={suite.available}/>
                                                            <HoverInput header={{as: 'h5', content: "Is Rent Negotiable: "}} type={"dropdown"} options={trueAndFalse} value={suite.rentNegotiable}/>
                                                            {
                                                                suite.rooms.map((room) => (
                                                                    <Card style={{width: '100%'}} key={room.id}>
                                                                        <Card.Header as={'h4'}>
                                                                            Rooms
                                                                        </Card.Header>
                                                                        <Card.Content>
                                                                            <HoverInput header={{as: 'h5', content: "Name:"}} value={room.name} updateFunction={null}/>
                                                                            <HoverInput header={{as: 'h5', content: "Room Type: "}} type={"dropdown"} options={roomTypes} value={room.roomType} updateFunction={null}/>
                                                                            <HoverInput header={{as: 'h5', content: "Number Available: "}} value={room.available} updateFunction={null}/>
                                                                            {!room.publicSpace ? <HoverInput header={{as: 'h5', content: "Rent (enter 0 if the room is not for rent on its own): "}} value={room.rent} updateFunction={null}/> : null}
                                                                        </Card.Content>
                                                                    </Card>
                                                                ))
                                                            }
                                                        </Card.Content>
                                                    </Card>
                                                ))
                                            }
                                        </Card.Content>
                                    </Card>
                                ))
                        }
                    </div>
                )
            },
            {email: this.state.email});
    }
}