import React, { Component } from 'react'
import NavButton from '../NavButton/NavButton';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: ['Home', 'Login', 'Search']
        };
    }

    handleMenuEvent = (event, menu) => {
        this.props.handleMenuEvent(menu);
    }

    render() {
        const dynaNavButton = this.state.menus.map((menu) =>
            <NavButton key={menu} title={menu} click={(event) => this.handleMenuEvent(event, menu)}/>
            );
        return (
            <>
            {dynaNavButton}
            </>
        );
    }
}

export default NavBar;