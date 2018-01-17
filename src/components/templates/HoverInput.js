import React, { Component } from 'react'
import { Container, Header, Grid, Icon, Input, Button } from 'semantic-ui-react'

export default class HoverInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            showEdit: false,
            edittable: false,
            value: props.value,
            newValue: props.value
        };
        this.hover = this.hover.bind(this);
        this.unhover = this.unhover.bind(this);
        this.editClick = this.editClick.bind(this);
        this.yesClick = this.yesClick.bind(this);
        this.noClick = this.noClick.bind(this);
    }

    hover = () => {
        this.setState({showEdit: true});
    };

    unhover = () => {
        this.setState({showEdit: false});
    };

    editClick = () => {
        this.setState({edittable: true})
    };

    yesClick = () => {
        this.setState({edittable: false, value: this.state.newValue})
    };

    noClick = () => {
        this.setState({edittable: false, newValue: this.state.value})
    };

    handleChange = (event) => {
        this.setState({newValue: event.target.value})
    };

    render() {

        const edittableComponent =
            <Grid columns={3}>
                <Grid.Column width={8}>
                    <Input value={this.state.newValue} onChange={this.handleChange}></Input>
                </Grid.Column>
                <Grid.Column width={2} style={{paddingLeft: 0, paddingRight: 0}}>
                    <Button icon={"checkmark"} color={"green"} onClick={this.yesClick}/>
                </Grid.Column>
                <Grid.Column style={{paddingLeft: 0, paddingRight: 0}}>
                    <Button icon={"close"} color={"red"} onClick={this.noClick}/>
                </Grid.Column>
            </Grid>;

        const unedittableComponent = <div style={{padding:'10px', marginTop:'20px'}}>{this.state.value}</div>;

        return(
            <Container onMouseOver={this.hover} onMouseOut={this.unhover} style={{padding: '15px'}}>
                <Grid columns={2}>
                    <Grid.Column width={8}>
                        <Header size={this.state.header.size}>
                            {this.state.header.content}
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name={"pencil"} style={{display: this.state.showEdit && !this.state.edittable ? "inline" : "none", cursor:"pointer"}} onClick={this.editClick}/>
                    </Grid.Column>
                </Grid>
                {this.state.edittable ? edittableComponent : unedittableComponent}
            </Container>
        )
    }
}