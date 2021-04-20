import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SideBar from '../sidebar/SideBar';
import { UserContext } from '../../../App';
import PaymentGetWay from '../../admin/paymentgetway/PaymentGetWay';
import Navbar from '../../sharecomponet/navbar/Navbar';


const CheakOutOrder = () => {
    const { serviceId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [service, setService] = useState({});
    useEffect(() => {
        fetch('https://arcane-bastion-75257.herokuapp.com/service/'+ serviceId)
        .then(res => res.json())
        .then(data => setService(data));
    }, [serviceId])
    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-4">
                <div class="alert alert-primary">
                    <h4>{loggedInUser.name}</h4>
                </div>
                <div class="alert alert-warning" >
                    <h4>{loggedInUser.email}</h4>
                </div>
                <div class="alert alert-success">
                <   h1>{service.name}</h1>
                </div>
                <h3 class="mt-5">Payment</h3>
                <div className="mt-3">
                    <PaymentGetWay></PaymentGetWay>
                </div>
            </div>
            <div className="col-md-4">

            </div>
        </div>
    );
};

export default CheakOutOrder;