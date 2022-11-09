import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {

    const [reviews, setReviews] = useState([])
    // const [deleteReview, setDeleteReview] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(reviews)

    // useEffect(() =>{
    //     fetch('http://localhost:5000/reviews')
    //     .then(res => res.json())
    //     .then(data => setDeleteReview(data))
    // },[])

    // console.log(deleteReview)
    const handleDelete = review => {
        const agree = window.confirm(`Are you sure you want to delete : ${review.reviewData}`)
        if (agree) {
            console.log("Deleting user with id:", review._id)
            fetch(`http://localhost:5000/reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("User deleted successfully")

                        const remaining = reviews.filter(dlt => dlt._id !== review._id)
                        setReviews(remaining)
                    }
                    console.log(data)
                })
        }
    }
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const filtered = reviews.filter(obj => {
        return obj.userEmail === user?.email;
    });
    // console.log(filtered);


    return (
        <div>
            {
                user?.uid ?
                    <>
                    <p className='text-4xl font-semibold my-10 text-center'>My Reviews</p>
                        {
                            filtered.map(rev => <div rev={rev}>
                                <div className="card card-side flex flex-row justify-between mb-5 bg-base-100 shadow-xl lg:mx-80">
                                    <figure ><img className='w-18 rounded-full ml-4' src={rev.userImage} alt="useImage" /></figure>
                                    <div className="card-body grid grid-cols-2 items-center">
                                        <div>
                                            <p className='text-xl'>{rev.userName}</p>
                                            <h2 className="">{rev.reviewData}</h2>
                                        </div>

                                        <div className="card-actions justify-end items-center">
                                            <button className="btn btn-primary">
                                                <Link to={`/update/${rev._id}`}>
                                                    <FaEdit></FaEdit>
                                                </Link>
                                            </button>
                                            <button onClick={() => handleDelete(rev)} className="btn btn-primary">
                                                <FaTrash></FaTrash>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }
                    </>
                    :
                    <>
                        <p>No reviews found</p>
                    </>
            }


        </div>
    );
};

export default MyReviews;