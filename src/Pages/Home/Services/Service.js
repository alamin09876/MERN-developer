import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Service = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const { picture, price, name, rating, discription, _id } = service;

    useEffect(() => {
        fetch('https://mern-developer-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }

        , [review])

    const filtered = review.filter(obj => {
        return obj.reviewId === service._id;
    });
    console.log(filtered);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const uName = user?.displayName || user?.email;
        console.log("name", uName);
        const userImage = user?.photoURL || '';
        const userEmail = user?.email;
        const reviewData = form.review.value;

        const reviews = {
            reviewId: _id,
            userName: uName,
            reviewData,
            userImage,
            userEmail
        }

        fetch('https://mern-developer-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("Order placed Successfully")
                    form.reset();
                }

            })
            .catch(err => console.log(err))

    }
    return (
        <>

            <div className="hero my-20">
                <div className="hero-content grid grid-cols-2">
                    <img src={picture} alt="" className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">Price: {price}</p>
                        <p className="py-6">{discription}</p>
                    </div>
                </div>
            </div>
            

            <div>
                <p className='text-center text-5xl font-semibold mb-6'>Students Feedback</p>

                {
                    filtered.map(rev => <div rev={rev}>
                        <div className="card card-side flex flex-row justify-between mb-5 bg-base-100 shadow-xl lg:mx-80">
                            <figure ><img className='w-18 rounded-full ml-4' src={rev.userImage} alt="useImage" /></figure>
                            <div className="card-body grid grid-cols-2 items-center">
                                <div>
                                    <p className='text-xl'>{rev.userName}</p>
                                    <h2 className="">{rev.reviewData}</h2>
                                </div>
                            </div>
                        </div>

                    </div>


                    )}
            </div>

            {
                user?.uid ?
                    <>
                        <div>
                            <h2 className='text-3xl font-medium text-center mt-10'>Give your Feedback</h2>
                            <form onSubmit={handleReview}>
                                <div className='flex justify-center'>
                                <textarea name="review" className="textarea textarea-bordered h-24 w-full lg:w-[630px] my-6" placeholder="Your Message" required></textarea>
                                </div>
                                <button className="btn btn-primary font-bold mx-auto mb-10 flex justify-center ">Give Feedback</button>
                               
                            </form>
                        </div>
                    </>
                    :
                    <>
                    </>
            }


        </>
    );
};

export default Service;