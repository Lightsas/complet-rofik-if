import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetails from '../servicedeetails/ServiceDetails';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://arcane-bastion-75257.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <div className="container">
            <h5 className="d-flex justify-content-center mt-5 pt-5">// Services //</h5>
            <h1 style={{textAlign: 'center'}}>Web Devlopment, Sotware Devlopment <br></br>Data Analytics</h1>
            <div className="row mt-5 pt-1">
                {
                    service.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>

        </div>
    );
};

export default Services;