import React from 'react';
import './style.css'
import { Navbar, Row } from 'react-materialize';
import Search from '../Search';
import Sort from '../Sort';

const Header = ({ handleSearchChange, searchDisabled, handleDropdownChange }) => {
    
    return (
        <Row>
            <Navbar
                alignLinks='left'
                brand={<a className='brand-logo' href='/'>Magic, The Gathering</a>}
                centerLogo
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
            </Navbar>
            <Row>
                <Search onSearchChange={handleSearchChange} searchDisabled={searchDisabled} />
                <Sort onDropdownChange={handleDropdownChange}/>
            </Row>
        </Row>
    )
}

Header.defaultProps = { 
    handleDropdownChange: () => {},
    handleSearchChange: () => {}
}

export default Header;