import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { NavItem, Icon, Navbar, Row, Col } from 'react-materialize';
import Search from '../Search';

const Header = () => {

    return (
        <Row>
            <Navbar
                alignLinks="right"
            >
            <div className='brand-logo'>Magic, The Gathering</div>
            <NavItem href="/">
                <Search />
            </NavItem>
            <NavItem href="/">
                <Icon>
                    filter
                </Icon>
            </NavItem>
            </Navbar>
        </Row>
    )
}

export default Header;