import React from 'react';
import HeaderMain from '../headermain/HeaderMain';
import Navbar from '../../sharecomponet/navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;