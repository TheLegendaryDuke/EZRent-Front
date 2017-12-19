import React, {Component} from 'react'
import {Dropdown, Icon, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


export default class UserMenuModule extends Component {
    render() {
        const user = this.props.user;

        if (user) {
            return (
                <Menu.Menu position='right'>
                    <Dropdown text={"Hi " + user.name} pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Item text={'Profile'}/>
                            <Dropdown.Item text={'Settings'}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            )
        } else {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item link>
                        <Link to={'/register'}>Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item link>
                        <Link to={'/login'}>Login</Link>
                    </Menu.Item>
                </Menu.Menu>
            )
        }
    }
}