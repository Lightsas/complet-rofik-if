import React from 'react';
import { Link } from 'react-router-dom';
import { useContext} from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {imageURL, name, description, id} = props.service;
    const handleOrder = () => {
        const newOrder = {...loggedInUser, ...props.service}
        fetch('https://arcane-bastion-75257.herokuapp.com/orderProject',{
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    } 

    return (
        <div className="col-md-4">
            <div className="card" style={{width: '18rem'}}>
                <img class="service" style={{height: '200px'}} src={imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> The Information Technology umbrella</li>
                    <li className="list-group-item">Can be quite large, covering many fields</li>
                    <li className="list-group-item">IT professionals perform a variety</li>
                </ul>
                <div className="card-body">
                    <Link onClick={handleOrder} to={`/cheakoutorder/${id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;