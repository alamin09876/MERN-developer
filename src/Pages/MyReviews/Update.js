import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Update = () => {
    const storedUser = useLoaderData();
    const notify = () => toast("Update review successfully!");
    const [user, setUser] = useState(storedUser);
    console.log(user)

    useEffect(() =>{
        fetch('https://mern-developer-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    const handleUpdateUser = event =>{
        event.preventDefault();
        
        const form = event.target;
        const review = form.review.value;
        const updatedReview = {reviewData:review}
        // console.log(reviewData:updatedReview);
        fetch(`https://mern-developer-server.vercel.app/reviews/${storedUser._id}`,{
            method : "PUT",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
              
                
            }
            console.log(data)
        })
        
    }

    

    return (
        <div className='mx-auto justify-center text-center'>
            <h2 className='text-2xl mx-auto lg:w-[800px] font-semibold my-6 p-6 rounded-lg'>Please Update: {storedUser.reviewData}</h2>
            <form onSubmit={handleUpdateUser}>
            <textarea  name="review" className="textarea textarea-bordered h-24 w-full lg:w-[800px]" placeholder="Your Message" defaultValue={storedUser.reviewData} required></textarea>
            <br></br>
                <button onClick={notify} className='btn btn-primary my-6 rounded-lg' type="submit">Update User</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Update;