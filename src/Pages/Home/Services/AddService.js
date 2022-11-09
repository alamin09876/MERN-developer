import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(photoURL, title, price, description)
        const services = {
            picture: photoURL,
            name: title,
            price,
            discription: description,
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if(data.acknowledged){
                //     alert("Order placed Successfully")
                //     form.reset();
                // }

            })
            .catch(err => console.log(err))

    }
    return (
        <div className='flex justify-center my-6' >

            <form onSubmit={handleReview} className='my-6'>
                <h1 className='text-5xl font-semibold mb-6 text-center text-black'>Add a course</h1>
                <input name="photoURL" type="text" placeholder="Photo URL" className="input input-ghost mb-6 input-bordered w-96" /><br></br>
                <input name="title" type="text" placeholder="Title" className="input input-ghost  input-bordered mb-6 w-96" /><br></br>
                <input name="price" type="text" placeholder="Price" className="input input-ghost input-bordered mb-6 w-96" /><br></br>
                <textarea name="description" className="textarea mb-6 textarea-bordered h-24 w-96" placeholder="Description" required></textarea><br></br>

                <div className='flex justify-center'>
                    <input className='btn ' type="submit" value="Details" />
                </div>
            </form>
        </div>
    );
};

export default AddService;