import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import axios from 'axios';
import AdminSideBar from "../sidebaradmin/AdminSideBar";

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const serviceData = {
            id: data.id,
            name: data.name,
            describtion: data.describtion,
            imageURL: imageURL
        }
        const url = `https://arcane-bastion-75257.herokuapp.com/addService`
        console.log()
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server site response'))
    };

    
    const handleUploadImage = service => {
        console.log(service.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0cc8dcef82f46175807fab552b1f0a09');
        imageData.append('image', service.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
          imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <section className="row">
            <div className="col-md-3">
                <AdminSideBar></AdminSideBar>
            </div>
            <div className="col-md-6 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{textAlign: 'center'}}>Add Service</h1>
                <div class="form-group mt-3">
                        <label for="exampleInputEmail1">ID</label>
                        <input type="text" class="form-control" name="id" defaultValue="" ref={register} />
                    </div>
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Enter email" defaultValue="" ref={register} />
                    </div>
                    <div class="form-group mt-3">
                        <label for="exampleInputEmail1">Describtion</label>
                        <input type="text" class="form-control" name="describtion" placeholder="Enter email" defaultValue="" ref={register} />
                    </div>
                    <input class="mt-3" name="exampleRequired" type="file" onChange={handleUploadImage} /> <br></br>               
                    <button  type="submit" class="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;