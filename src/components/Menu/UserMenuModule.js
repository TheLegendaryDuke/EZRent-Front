import React, {Component} from 'react'
import {Dropdown, Icon, Menu} from 'semantic-ui-react'
import {BACKEND_ROOT} from "../../../api-config";

export default class UserMenuModule extends Component {
    logout = (e) => {window.location.href=BACKEND_ROOT+"/logout"};

    loginHandler = (e) => {this.props.history.push('/login')};

    registerHandler = (e) => {this.props.history.push('/register')};

    render() {
        const user = this.props.user;

        if (user) {
            return (
                <Menu.Menu position='right'>
                    <Dropdown text={"Hi " + user.name} pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Item text={'Profile'}/>
                            <Dropdown.Item text={'Settings'}/>
                            <Dropdown.Divider />
                            <Dropdown.Item text={'Logout'} onClick={this.logout}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            )
        } else {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='register'
                        onClick={this.registerHandler}
                    />
                    <Menu.Item
                        name='login'
                        onClick={this.loginHandler}
                    />
                </Menu.Menu>
            )
        }
    }
}