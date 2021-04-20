import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminOrderListDetails from '../adminorderlistdetails/AdminOrderListDetails';
import AdminSideBar from '../sidebaradmin/AdminSideBar';

const AdminOrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://arcane-bastion-75257.herokuapp.com/order/details')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <div  className="row">
                <div className="col-md-3">
                    <AdminSideBar></AdminSideBar>
                </div>
                <div className="col-md-7 mt-5">
                    <h3 style={{textAlign: 'center'}}>Order List</h3>
                    <table class="table ">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th style={{textAlign: 'center'}} scope="col">Email</th>
                        </tr>
                    </thead>
                    </table>
                    {
                        service.map(service =><AdminOrderListDetails service={service}></AdminOrderListDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminOrderList;