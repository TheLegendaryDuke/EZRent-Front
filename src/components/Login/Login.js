import React, {Component} from 'react'
import {Grid, Divider, Button, Checkbox, Form, Input, Icon} from 'semantic-ui-react'
import LoginForm from './LoginForm'
import axios from 'axios'
import {BACKEND_ROOT} from "../../../api-config";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false};
        this.cancelLogin = this.cancelLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin = (vals) => {
        //todo: handle the case "bad credentials"
        this.setState({loading: false});

        //this does not need to be specified once the two applications are moved to the same host (no cors)
        axios.defaults.withCredentials = true;

        //Note: use query params when making rest requests
        axios.post(BACKEND_ROOT + '/login?email='+vals.email+'&password='+vals.password)
            .then((response) => {
                window.location.href = "/";
            }).catch((error) => {
                this.setState({loginError: error, loading: false});
        });
    };


    cancelLogin = function (e) {
        this.props.history.push('/');
    };

    render() {
        return (
            <Grid columns={2} style={{flex: 1}}>
                <Grid.Column width={8}>
                    <LoginForm handleLogin={this.handleLogin} loading={this.state.loading} cancelLogin={this.cancelLogin}/>
                </Grid.Column>
                <Divider style={{position: 'relative', margin: 0, padding: 0}} vertical>Or</Divider>
                <Grid.Column width={7}>
                    <h2>Login using social logins</h2>
                    {/*Note: not using axios since cors enforces a stricter rule on API calls*/}
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
                </Grid.Column>
            </Grid>
        )
    }
}