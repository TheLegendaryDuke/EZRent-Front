import React, {Component} from 'react'
import {Form, Input, Grid, Segment, Button} from 'semantic-ui-react'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
        this.inputChange = this.inputChange.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    inputChange(e) {
        const name = e.target.name;
        switch (name) {
            case "password":
                this.setState({password: e.target.value});
                break;
            default:
                this.setState({email: e.target.value});
        }
    }

    submitForm() {
        this.props.handleLogin({
            email: this.state.email,
            password: this.state.password
        });
    }

    render() {
        return (
            <Segment loading={this.props.loading}>
                <h2>Login with your email</h2>
                <Form onSubmit={this.submitForm}>
                    <Form.Field required>
                        <label>Email</label>
                        <Input icon={'mail'} iconPosition={'left'} placeholder={'Email'} type={'email'} name={'email'} onChange={this.inputChange} value={this.state.email}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input icon={'lock'} iconPosition={'left'} placeholder={'Password'} type={'password'} name={'password'} onChange={this.inputChange} value={this.state.password}/>
                    </Form.Field>
                    <Grid columns={2}>
                        <Grid.Column width={8}>
                            <Button type={'submit'} primary>Submit</Button>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Button type={'button'} secondary onClick={this.props.cancelLogin}>Cancel</Button>
                        </Grid.Column>
                    </Grid>
                </Form>
            </Segment>
        )
    }
}