import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='flex justify-between px-10 mx-10 align-middle  pt-5'>
            <div>
                <img src={logo} alt="logo-img" />
            </div>
            <div className=''>
                <a className='ml-8 ' href="/Order">Order</a>
                <a className='ml-8 ' href="/Review">Order Review</a>
                <a className='ml-8 ' href="/Inventory">Manage Inventory</a>
                <a className='ml-8 ' href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;