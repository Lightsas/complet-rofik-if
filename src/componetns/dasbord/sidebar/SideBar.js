import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="row">
            <div className="">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link to="/#" class="nav-link" aria-current="page">Order</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/userorder" class="nav-link" href="#">User Order List</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/review" class="nav-link" >Review</Link>
                    </li>
                </ul>
            </div>    
        </div>
    );
};

export default SideBar;