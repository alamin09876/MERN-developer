import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, picture, price, name, rating, discription } = service;
    return (
        <PhotoProvider >
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="foo">
                    <PhotoView src={picture}>
                        <img src={picture} alt="Shoes" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                    <p>
                        {
                            discription.length > 100 ?
                                <p>{discription.slice(0, 100) + '...'}</p>
                                :
                                <p>{discription}</p>
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceCard;