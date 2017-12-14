import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'

export default class Header extends React.Component {
    state = {activeItem: 'home'};
    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
        window.location.href = "/";
    };

    render() {
        const {activeItem} = this.state;

        return (
            <Menu>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>

                    </Menu.Item>
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
                </Menu.Menu>
            </Menu>
        );
    }
}

// const Header = () => (<div>Hello Header!</div>);
//
// export default Header;