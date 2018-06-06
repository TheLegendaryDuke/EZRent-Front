import React, {Component} from 'react'
import {Form, Input, Grid, Segment, Button} from 'semantic-ui-react'

export default class LoginForm extends Component {
    render() {
        return (
            <Segment loading={this.props.loading}>
                <h2>Login with your email</h2>
                <Form onSubmit={this.props.handleLogin}>
                    <Form.Field required>
                        <label>Email</label>
                        <Input name={'email'} icon={'mail'} iconPosition={'left'} placeholder={'Email'} type={'email'}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <Input name={'password'} icon={'lock'} iconPosition={'left'} placeholder={'Password'} type={'password'}/>
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