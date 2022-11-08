import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event =>{
        event.preventDefault();
        // const form = event.target;
        // const review = form.review.value;
        // console.log(user);
        fetch(`http://localhost:5000/reviews/${storedUser._id}`,{
            method : "PUT",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                alert("User update successfully")
                
            }
            console.log(data)
        })
        
    }

    const handleInputChange = event =>{
        const review = event.target.review;
        const value = event.target.value;
        const newUser = {...user}
        newUser[review] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Please Update: {storedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
            <textarea onBlur={handleInputChange} name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;