import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class TADropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            prompt: props.prompt,
            link: props.link,
            value: props.value
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    componentWillReceiveProps(nextProps) {
            this.state.data = nextProps.data;
    }

    onClickHandler = (e, data) => {
        if(this.state.link && data.value !== this.state.value) {
            this.props.history.push(this.props.link + data.value);
            this.state.value = data.value;
        }
    };

    render() {
        return(
            <Dropdown placeholder={this.state.prompt} search selection options={this.state.data} onChange={this.onClickHandler} defaultValue={this.state.value}/>
        );
    }
}