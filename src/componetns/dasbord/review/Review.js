import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../sharecomponet/navbar/Navbar';
import SideBar from '../sidebar/SideBar';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            describtion: data.describtion,
            companyname: data.companyname
        }
        const url = `https://arcane-bastion-75257.herokuapp.com/addReview`
        console.log()
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log('server site response'))
    };
    

    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>

            <div className="col-md-4">
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group mt-4">
                        <input type="text" placeholder="Name" class="form-control" name="name" defaultValue="" ref={register} />
                    </div>
                    <div class="form-group mt-3">
                        <input type="text" class="form-control" name="companyname" placeholder="Company Name" defaultValue="" ref={register} />
                    </div>
                    <div class="form-group mt-3">
                        <input type="text" class="form-control" name="describtion" placeholder="Describtion" defaultValue="" ref={register} />
                    </div>       
                    <button  type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;