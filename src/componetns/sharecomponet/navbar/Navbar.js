import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a style={{color: 'black'}} class="navbar-brand" href="#">Rofik IT</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
                <a class="nav-link ms-5 ms-5" aria-current="page" href="#">Home</a>
                <a class="nav-link ms-5" href="#">About</a>
                <a class="nav-link ms-5" href="#">Services</a>
                <a class="nav-link ms-5" href="#">Pages</a>
                <Link to="/dasbord" class="nav-link ms-5" href="#">Admin</Link>
                <Link to="/login" class="nav-link ms-5">Login</Link>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;