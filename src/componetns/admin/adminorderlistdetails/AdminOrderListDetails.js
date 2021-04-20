import React from 'react';

const AdminOrderListDetails = ({service}) => {
    return (
        <div>
            <table class="table ">
            <thead>
                <tr>
                <th scope="col">{service.name}</th>
                <th style={{textAlign: 'end'}} scope="col">{service.email}</th>
                </tr>
            </thead>
            </table>
        </div>
    );
};

export default AdminOrderListDetails;