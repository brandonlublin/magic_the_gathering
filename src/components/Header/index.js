import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { NavItem, Icon, Navbar, Row, Col } from 'react-materialize';

const Header = () => {
    return (
        <Row>
            <Navbar
                alignLinks="right"
            >
            <div className='brand-logo'>Magic, The Gathering</div>
            <NavItem href="/">
                <Icon>
                    search
                </Icon>
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