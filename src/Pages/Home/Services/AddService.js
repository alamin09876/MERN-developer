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
            picture:photoURL,
            name:title,
            price,
            discription:description,
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
        <div>
            <form onSubmit={handleReview}>
                <input name="photoURL" type="text" placeholder="Photo URL" className="input input-ghost w-full  input-bordered" />
                <input name="title" type="text" placeholder="Title" className="input input-ghost w-full  input-bordered" />
                <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" />
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Description" required></textarea>

                <input className='btn' type="submit" value="Details" />
            </form>
        </div>
    );
};

export default AddService;