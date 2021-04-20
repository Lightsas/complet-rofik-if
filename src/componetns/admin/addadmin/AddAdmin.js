import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminSideBar from '../sidebaradmin/AdminSideBar';

const AddAdmin = () => {
    const [info, setInfo] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name]= e.target.value;
        setInfo(newInfo);
    }
    const onSubmit = data => {
        const addAdmin = {
             name: data.name,
            email: data.email,
        }
        const url = `https://arcane-bastion-75257.herokuapp.com/addadmin`
        console.log()
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addAdmin)
        })
        .then(res => console.log('server site response'))
    }; 

    return (
        <div className="row">
            <div className="col-md-3">
                 <AdminSideBar></AdminSideBar>
            </div>
            <div className="col-md-9 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Add Admin</h3>
                    <div class="form-group">
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter email" defaultValue="" ref={register} />
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="text" class="form-control" name="email" placeholder="Enter email" defaultValue="" ref={register} />
                        </div>         
                        <button  type="submit" class="mt-3 btn btn-primary">Submit</button>
                </form>   
            </div>
        </div>
    );
};

export default AddAdmin;