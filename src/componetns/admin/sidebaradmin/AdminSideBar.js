import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div className="row">
            <div className="">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link to="/adminorderlist" class="nav-link" aria-current="page">Order List</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/addservice" class="nav-link">Add Service</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/addadmin" class="nav-link" >Add Admin</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/mangeservice" class="nav-link" >Mange Service</Link>
                    </li>
                </ul>
            </div>    
        </div>
    );
};

export default AdminSideBar;