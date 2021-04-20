import React, { useEffect, useState } from 'react';
import MangeServiceDetails from '../mangeservicedetails/MangeServiceDetails';

const MangeService = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://arcane-bastion-75257.herokuapp.com/order/details')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>Mange Service</h1>
            {
                service.map(service => <MangeServiceDetails service={service}></MangeServiceDetails>)
            }
        </div>
    );
};

export default MangeService;