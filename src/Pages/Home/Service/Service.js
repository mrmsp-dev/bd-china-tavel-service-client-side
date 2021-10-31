import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    // const {service} = props;
    const { _id, name, price, description, img } = props.service;

    // const short = des;



    return (
        <div>
            <div className="card mb-3 container-fluid no-margin carts" >
                <div className="row g-0">
                    <div className="col-md-4  d-flex ">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 no-margin">
                        <div className="card-body ">
                            <h5 className="card-title">{name}</h5>
                            <p className="px-3 text-start fs-6">
                                {
                                    description.slice(0, 250)
                                }.......
                            </p>

                            <div className="d-flex justify-content-between">
                                <h5 className="price" >Price Starts from: <span className="text-black" >&yen;{price}</span> </h5>
                                <Link to={`/booking/${_id}`}>
                                    <button className="btn btn-danger button ">Book </button>
                                </Link>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;