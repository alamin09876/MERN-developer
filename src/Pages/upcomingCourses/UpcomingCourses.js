import React from 'react';
import img1 from '../../assest/images/python.webp'
import img2 from '../../assest/images/django.png'
import img3 from '../../assest/images/php.jpg'


const UpcomingCourses = () => {
    return (
        <div >
            <div>
                <h2 className='text-5xl mb-10'>Upcoming Courses</h2>
            </div>
            <div className='flex gap-10 my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Python</h2>
                        <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Django</h2>
                        <p>Django is a free and open-source, Python-based web framework that follows the model template views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PHP</h2>
                        <p>PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by The PHP Group.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCourses;