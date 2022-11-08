import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    console.log(reviews)

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const filtered = reviews.filter(obj => {
        return obj.userEmail === user?.email;
    });
    console.log(filtered);


    return (
        <div>
            {
                user?.uid ?
                <>
            {
                filtered.map(rev => <p rev={rev}>{<p>name: {rev.userName}</p>}{rev.reviewData}<button>X</button>
                <Link to ={`/update/${rev._id}`}>
                            <button>Update</button>
                        </Link>
                </p>)
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