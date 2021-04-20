import React from 'react';
import HomePhoto from '../../../images/11.PNG';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center mb-5">
           <div className="col-md-4 offset-md-1">
               <h5 style={{color: 'blue'}}>WELCOME TO ROFIK IT</h5>
               <h1 className="mt-3" style={{fontSize: '60px'}}>Innovative<br></br>IT Solutions<span style={{color: 'blue'}}>.</span></h1>
               <button className="btn btn-primary p-3 mt-4">Get In Touch +</button>

           </div>
           <div className="col-md-6">
               <img style={{height: '600px'}} src={HomePhoto} alt="" className="img-fluid"></img>
           </div>
        </main>
    );
};

export default HeaderMain;