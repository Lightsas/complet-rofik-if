import React, { useState } from 'react';
import FooterDetails from './FooterDetails';

const Footter = () => {
    const fotterData = [
        {
            title: 'About us',
            info: 'Lorem ipsum dolor sit amet conse ctet ur adipisicing elit, sed do eiu smod tem por incididunt ut labore dolore magna aliqua enim.',

        },
        {
            title: 'Services',
            info: 'Lorem ipsum dolor sit amet conse ctet ur adipisicing elit, sed do eiu smod tem por incididunt ut labore dolore magna aliqua enim.',
        },
        {
            title: 'About us',
            info: 'Lorem ipsum dolor sit amet conse ctet ur adipisicing elit, sed do eiu smod tem por incididunt ut labore dolore magna aliqua enim.',
        }
    ]
    return (
        <div className="row mt-5 p-5 d-flex justify-content-center" style={{backgroundColor: 'gray', color: 'white'}}>
            {
                fotterData.map(fotterData => <FooterDetails fotterData={fotterData}></FooterDetails>)
            }
        </div>


    );
};

export default Footter;