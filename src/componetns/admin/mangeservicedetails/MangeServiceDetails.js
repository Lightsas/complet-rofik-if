import React from 'react';

const MangeServiceDetails = ({service}) => {

    return (
        <div>
            <h1>{service.name}<button >delet</button></h1>
        </div>
    );
};

export default MangeServiceDetails;