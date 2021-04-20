import React from 'react';

const FooterDetails = ({fotterData}) => {
    return (
        <div className="col-md-4 p-3 ">
            <h1 style={{textAlign: 'center'}}>{fotterData.title}</h1>
            <p style={{textAlign: 'center'}}>{fotterData.info}</p>
        </div>
    );
};

export default FooterDetails;