import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { NavItem, Icon, Navbar } from 'react-materialize';

const Header = () => {
    return (
        <div className="section">
            <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Magic, The Gathering</a>}
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem href="/">
                <Icon>
                search
                </Icon>
            </NavItem>
            <NavItem href="get-started.html">
                <Icon>
                filter
                </Icon>
            </NavItem>
            </Navbar>
        </div>
    )
}

export default Header;