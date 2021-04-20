import React from 'react';
import Footter from '../../sharecomponet/footer/Footter';
import Navbar from '../../sharecomponet/navbar/Navbar';
import AdminSideBar from '../sidebaradmin/AdminSideBar';

const Dasbord = () => {
    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-3">
                <AdminSideBar></AdminSideBar>
            </div>
            <div style={{height: '550px'}} className="col-md-9">

            </div>
            <Footter></Footter>
        </div>
    );
};

export default Dasbord;