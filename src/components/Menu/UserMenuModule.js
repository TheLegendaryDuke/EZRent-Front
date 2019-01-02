import React, {Component} from 'react'
import {Dropdown, Icon, Menu} from 'semantic-ui-react'
import {BACKEND_ROOT} from "../../../api-config";
import jwt_decode from 'jwt-decode'

export default class UserMenuModule extends Component {
    logout = (e) => {
        localStorage.removeItem('jwt');
        this.props.history.push("/");
    };

    loginHandler = (e) => {this.props.history.push('/login')};

    registerHandler = (e) => {this.props.history.push('/register')};

    render() {
        var jwt = localStorage.getItem('jwt');
        try {
            jwt = jwt_decode(jwt)
        }catch (e) {
            jwt = null
        }

        console.log(jwt);

        if (jwt) {
            return (
                <Menu.Menu position='right'>
                    <Dropdown text={"Hi " + jwt.name} pointing className='link item'>
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