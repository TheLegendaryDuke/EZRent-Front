import React, {Component} from 'react'
import { Grid, Divider, Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react'
import {BACKEND_ROOT} from "../../../api-config";
import RegisterForm from "./RegisterForm";
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import { compose } from 'react-apollo';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {socialLogin: props.match.path === "/registerWithSocial"};
        this.cancelLogin = this.cancelLogin.bind(this);
    }

    cancelLogin = function (e) {
        this.props.history.push('/');
    };

    render() {
        const mutation = gql`
                mutation register($email:String!, $username:String!, $password:String!) {
                  register(email: $email, username: $username, password: $password) {
                    name
                    email
                  }
                }
            `;
        const FormWithData = compose(graphql(mutation))(RegisterForm);

        const queryString = require('query-string');
        var parsed = this.state.socialLogin ? queryString.parse(this.props.location.search) : null;

        return(
            <Grid columns={2} style={{flex: 1}}>
                <Grid.Column width={8}>
                    <h2>Register with your email</h2>
                    <FormWithData inputChange={this.inputChange} social={this.state.socialLogin} prefills={parsed} {...this.props}/>
                </Grid.Column>
                <Divider style={{position: 'relative', margin: 0, padding: 0}} vertical />
                {this.state.socialLogin ? null : (
                    <Grid.Column width={7}>
                        <h2>Use your social account</h2>
                        <form method={"post"} action={BACKEND_ROOT + "/login/facebook"}>
                            <Button color='facebook'>
                                <Icon name='facebook'/> Facebook
                            </Button>
                        </form>
                        <form method={"post"} action={BACKEND_ROOT + "/login/twitter"}>
                            <Button color='twitter'>
                                <Icon name='twitter'/> Twitter
                            </Button>
                        </form>
                        <form method={"post"} action={BACKEND_ROOT + "/login/google"}>
                            <Button color='google plus'>
                                <Icon name='google plus'/> Google Plus
                            </Button>
                        </form>
                    </Grid.Column>)}
            </Grid>
        );
    }
}