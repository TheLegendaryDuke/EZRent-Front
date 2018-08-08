import React, {Component} from 'react'
import {Container, Header, Grid, Icon, Input, Button, Dropdown} from 'semantic-ui-react'

export default class HoverInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            showEdit: false,
            edittable: false,
            value: props.value,
            newValue: props.value,
            options: props.options,
            type: props.type == null ? "input" : props.type,
            updateFunction: props.updateFunction
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
        this.setState({edittable: false, value: this.state.newValue});
        if(this.state.updateFunction != null) {
            this.state.updateFunction(this.state.value)
        }
    };

    noClick = () => {
        this.setState({edittable: false, newValue: this.state.value})
    };

    handleChange = (event) => {
        this.setState({newValue: event.target.value})
    };

    render() {

        var edittableComponent = null;
        if(this.state.type === "input") {
            edittableComponent =
                <div style={{display: 'inline-block', height: '100%'}}>
                    <Input value={this.state.newValue} onChange={this.handleChange} style={{display: 'inline-block'}}/>
                    <Button icon={"checkmark"} color={"green"} onClick={this.yesClick}
                            style={{display: 'inline-block'}}/>
                    <Button icon={"close"} color={"red"} onClick={this.noClick} style={{display: 'inline-block'}}/>
                </div>;
        }else {
            edittableComponent =
                <div style={{display: 'inline-block', height: '100%'}}>
                    <Dropdown options={this.state.options} defaultValue={this.state.newValue} onChange={this.handleChange} style={{display: 'inline-block'}}/>
                    <Button icon={"checkmark"} color={"green"} onClick={this.yesClick}
                            style={{display: 'inline-block'}}/>
                    <Button icon={"close"} color={"red"} onClick={this.noClick} style={{display: 'inline-block'}}/>
                </div>;
        }

        var unedittableComponent = null;
        if(this.state.type === "input") {
            unedittableComponent = <div style={{padding: '10px', display: 'inline-block', height: '100%'}}>{this.state.value}</div>;
        }else {
            unedittableComponent = <div style={{padding: '10px', display: 'inline-block', height: '100%'}}>{this.state.options.find((opt) => {return opt.value === this.state.value}).text}</div>;
        }

        return (
            <div onMouseOver={this.hover} onMouseOut={this.unhover} style={{width: '100%'}}>
                <Header as={this.state.header.as}>
                    {this.state.header.content}
                </Header>
                <div style={{width: '100%', backgroundColor: this.state.showEdit && !this.state.edittable ? "#EEEEEE" : "#FFFFFF"}}>
                    {this.state.edittable ? edittableComponent : unedittableComponent}
                    <Icon name={"pencil"} style={{
                        display: this.state.showEdit && !this.state.edittable ? "inline-block" : "none",
                        cursor: "pointer",
                        margin: 'auto',
                        position: "absolute",
                        right: 0
                    }} onClick={this.editClick}/>
                </div>
            </div>
        )
    }
}