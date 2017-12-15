import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'

const navBarStyle = {
    margin: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto'
};

export default class Header extends React.Component {
    state = {activeItem: 'home'};
    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
        window.location.href = "/";
    };

    render() {
        const {activeItem} = this.state;

        return (
            <Menu style={navBarStyle}>
                <Menu.Item name='home' active={activeItem === 'logo'} onClick={this.handleItemClick}>
                    <img src={"../icon.PNG"}/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>

                    </Menu.Item>
                    <Menu.Item name='logout' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                </Menu.Menu>
            </Menu>
        );
    }
}

// const Header = () => (<div>Hello Header!</div>);
//
// export default Header;