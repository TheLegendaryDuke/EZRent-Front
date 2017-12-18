import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class TADropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            prompt: props.prompt,
            link: props.link
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.data = nextProps.data;
    }

    onClickHandler = (e, data) => {
        if(this.state.link) {
            window.location.href = this.props.link + data.value;
        }
    };

    render() {
        return(
            <Dropdown placeholder={this.state.prompt} search selection options={this.state.data} onChange={this.onClickHandler}/>
        );
    }
}