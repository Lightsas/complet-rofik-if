import React from 'react';
import ServiceImage from '../../../images/12.PNG';

const About = () => {
    return (
        <div className="">
            <div className="row mt-5 pt-5">
                <div className="col-md-6">
                    <img src={ServiceImage} alt=""></img>
                </div>
                <div className="col-md-6">
                    <h5>// ABOUT US</h5>
                    <h1 className="mt-4">We've Been Thriving In<br></br>38 Years<span style={{color: 'blue'}}>.</span></h1>
                    <p className="me-5 mt-5 pe-5" style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <div className="row p-5 me-5">
                        <div className="col-sm-6">
                            <h4>Business Idea</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="col-sm-6">
                            <h4>Move Forward</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;