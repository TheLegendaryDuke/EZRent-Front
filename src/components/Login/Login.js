import React, {Component} from 'react'
import {Grid, Divider, Button, Checkbox, Form, Input, Icon} from 'semantic-ui-react'
import LoginForm from './LoginForm'
import axios from 'axios'
import {BACKEND_ROOT} from "../../../api-config";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false}
    }

    handleLogin = (e) => {
        //todo: handle the case "bad credentials"
        this.setState({loading: false});
        const target = e.target;
        const email = target[0].value;
        const password = target[1].value;
        axios.post(BACKEND_ROOT + '/login', {email: email, password: password})
            .then((response) => {
                this.props.history.push('/');
            }).catch((error) => {
            this.setState({loginError: error, loading: false});
        });
    };

    render() {
        return (
            <Grid columns={2} style={{flex: 1}}>
                <Grid.Column width={8}>
                    <LoginForm handleLogin={this.handleLogin} loading={this.state.loading}/>
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