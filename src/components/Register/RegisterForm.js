import React, {Component} from 'react'
import { Grid, Divider, Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react'

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);
        if(props.social) {
            this.state = {prefillEmail: this.props.prefills.email, prefillName: this.props.prefills.name, email: this.props.prefills.email, name: this.props.prefills.name};
        }else {
            this.state = {prefillEmail: "", prefillName: "", name: "", email: ""};
        }
        this.inputChange = this.inputChange.bind(this);
        this.register = this.register.bind(this);
    }

    inputChange(e) {
        const name = e.target.name;
        switch (name) {
            case "name":
                this.setState({name: e.target.value});
                break;
            case "password":
                this.setState({password: e.target.value});
                break;
            default:
                this.setState({email: e.target.value});
        }
    }

    register() {
        this.props.mutate({
            variables: {email: this.state.email, username: this.state.name, password: this.state.password}
        }).then(({ data }) => {
            if(data.register) {
                window.location.href = "/";
            }else {
                alert("The email is already taken, use a different one.");
            }
        })
    }

    render() {

        return (
            <Form onSubmit={this.register}>
            <Form.Field required>
                <label>Username</label>
                <Input icon={'user'} iconPosition={'left'} placeholder={'Username'} name={'name'} onChange={this.inputChange} value={this.state.prefillName}/>
            </Form.Field>
            <Form.Field required>
                <label>Password</label>
                <Input icon={'lock'} iconPosition={'left'} placeholder={'Password'} type={'password'} name={'password'} onChange={this.inputChange}/>
            </Form.Field>
            <Form.Field required>
                <label>Email</label>
                <Input icon={'mail'} iconPosition={'left'} placeholder={'Email'} type={'email'} name={'email'} onChange={this.inputChange} value={this.state.prefillEmail}/>
            </Form.Field>
            <Grid columns={2}>
                <Grid.Column width={8}>
                    <Button type={'submit'} primary>Submit</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button type={'button'} secondary>Cancel</Button>
                </Grid.Column>
            </Grid>
        </Form>
        )
    }
}
