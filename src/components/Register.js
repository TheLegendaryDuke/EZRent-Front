import React, {Component} from 'react'
import { Grid, Divider, Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react'

export default class Register extends Component {
    render() {
        return(
            <Grid columns={2} style={{flex: 1}}>
                <Grid.Column width={8}>
                    <h2>Register with your email</h2>
                    <Form>
                        <Form.Field required>
                            <label>Username</label>
                            <Input icon={'user'} iconPosition={'left'} placeholder={'Username'}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <Input icon={'lock'} iconPosition={'left'} placeholder={'Password'} type={'password'}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Email</label>
                            <Input icon={'mail'} iconPosition={'left'} placeholder={'Email'} type={'email'}/>
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
                </Grid.Column>
                <Divider style={{position:'relative', margin:0, padding:0}} vertical>Or</Divider>
                <Grid.Column width={7}>
                    <h2>Register using social logins</h2>
                    <Button color='facebook'>
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button color='twitter'>
                        <Icon name='twitter' /> Twitter
                    </Button>
                    <Button color='google plus'>
                        <Icon name='google plus' /> Google Plus
                    </Button>
                </Grid.Column>
            </Grid>
        )
    }
}