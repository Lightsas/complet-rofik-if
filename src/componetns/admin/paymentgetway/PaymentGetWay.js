import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';

const stripePromise = loadStripe('pk_test_51Ie2P4ErLHc2sC31D3gCBoU2cYNPmQSI51AkcmnrjjWtJa8Ie1pmcdUxrBIO7OMZnkS3vaiqx7zTSyu19Ioytak400OGiE5oyF');

const PaymentGetWay = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardFrom></SimpleCardFrom>
      </Elements>
    );
};

export default PaymentGetWay;