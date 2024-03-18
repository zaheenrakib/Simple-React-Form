// import React from 'react';
// import PropTypes from 'prop-types';

import { useState } from "react";

const Registration = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    // console.log({name: name,email: email,password: password});

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password
        }
        console.log(user);
    }


    return (
        <div className="container w-1/2 mx-auto">
            <form onSubmit={(event) => handleSubmit(event)}>
                <label className="input m-4 input-bordered flex items-center gap-2">
                    Name :
                    <input onChange={(event) => setName(event.target.value)} type="text" className="grow" placeholder="Enter Your Name" />
                </label>
                <label className="input m-4 input-bordered flex items-center gap-2">
                    Email : 
                    <input onChange={(event) => setEmail(event.target.value)} type="text" className="grow" placeholder="Enter Your Email" />
                </label>
                <label className="input m-4 input-bordered flex items-center gap-2">
                    PassWord :
                    <input onChange={(event) => setPassword(event.target.value)} type="text" className="grow" placeholder="Enter Your Password" />
                </label>
                <button className="btn btn-lg btn-primary"> Sign Up </button>
            </form>
        </div>
    );
};

Registration.propTypes = {

};

export default Registration;