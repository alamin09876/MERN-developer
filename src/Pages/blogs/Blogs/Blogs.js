import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-center my-6'>
                <h1 className='text-2xl font-semibold text-cyan-400'>1. Difference between SQL and NoSQL</h1>
                <p>SQL is the programming language used to interface with relational<br></br> databases. (Relational databases model data as records in rows and<br></br> tables with logical links between them). NoSQL is a class of <br></br>DBMs that are non-relational and generally do not use SQL</p>
            </div>
            <div className='text-center my-6'>
                <h1 className='text-2xl font-semibold text-cyan-400'>2. What is JWT, and how does it work?</h1>
                <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard<br></br> (RFC 7519) for securely transmitting information between parties as JSON object.<br></br> It is compact, readable and digitally signed using a private key/ or a public key pair by the<br></br> Identity Provider(IdP)</p>
            </div>
            <div className='text-center my-6'>
                <h1 className='text-2xl font-semibold text-cyan-400'>3. What is the difference between javascript and NodeJS?</h1>
                <p>JavaScript is a simple programming language that can be used with any<br></br> browser that has the JavaScript Engine installed. Node. js, on the other<br></br> hand, is an interpreter or execution environment for the JavaScript<br></br> programming language.</p>
            </div>
            <div className='text-center my-6'>
                <h1 className='text-2xl font-semibold text-cyan-400'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>How NodeJS handle multiple client requests? NodeJS receives multiple<br></br> client requests and places them into EventQueue. NodeJS is built with<br></br> the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives<br></br> requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;