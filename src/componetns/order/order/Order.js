import React from 'react';

const Order = ({order}) => {
    return (
        <div className="col-md-4">
            <h1></h1>
            <div class="card" style={{width: '18rem'}}>
                <img style={{height: '200px'}} src={order.imageURL} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{order.name}</h5>
                    <p class="card-text"></p>                    
                </div>
            </div>
        </div>

    );
};

export default Order;