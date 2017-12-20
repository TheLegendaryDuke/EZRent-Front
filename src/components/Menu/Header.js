import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'
import UserMenuModule from './UserMenuModule'
import { withRouter } from 'react-router'

const navBarStyle = {
    margin: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    borderRadius: 0
};

class Header extends React.Component {
    handleItemClick = (e, {name}) => {
        // this.setState({activeItem: name});
        this.props.history.push("/");
    };

    render() {
        return (
            <Menu style={navBarStyle}>
                <Menu.Item name='home' onClick={this.handleItemClick}>
                    <img src={"../icon.PNG"}/>
                </Menu.Item>
                <UserMenuModule {...this.props}/>
            </Menu>
        );
    }
}

export default withRouter(Header)

// const Header = () => (<div>Hello Header!</div>);
//
// export default Header;