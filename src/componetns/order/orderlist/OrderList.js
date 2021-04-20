import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import SideBar from '../../dasbord/sidebar/SideBar';
import Navbar from '../../sharecomponet/navbar/Navbar';
import Order from '../order/Order';


const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://arcane-bastion-75257.herokuapp.com/order?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])

    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <p>Name : {loggedInUser.name}</p>
                <div className="row">
                    {
                        order.map(order =><Order order={order}></Order>)
                    }
                </div>
            </div>    
        </div>
    );
};

export default OrderList;