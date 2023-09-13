import React from 'react'
import { useState } from 'react'
// import { Prev } from 'react-bootstrap/esm/PageItem'

const Registration = () => {

    const [user, setUser] = useState({
        fname: "",
        mail: "",
        gender: "",
        address: ''
    })

    const [final, setfinal] = useState()


    const handleChange = (e) => {
        e.preventDefault()
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
        // console.log(user)

    }

    const printData = (e) => {
        e.preventDefault();
        setfinal(user)
        console.log(final)
    }



    return (
        <>
            <div className="container">
                <h1>Register</h1>
                <b5>Kindly fill information to registration</b5>

                <form onSubmit={printData}>

                    <label htmlFor='fname'>Fullname : </label>
                    <input type='text' id='fname' name='fname' onChange={handleChange} placeholder='Enter Name'></input> <br />
                    <br />

                    <label htmlFor='mail'>Email : </label>
                    <input type='email' id='mail' name='mail' onChange={handleChange} placeholder='Enter Email'></input> <br />
                    <br />

                    <label htmlFor='gender'>Gender : </label>
                    <label htmlFor='male'>Male </label>
                    <input type='radio' name='gender' id='male' onChange={handleChange}></input>
                    <label htmlFor='female'>Female </label>
                    <input type='radio' name='gender' id='female' onChange={handleChange}></input> <br />
                    <br />

                    <label htmlFor='address'>Address : </label>
                    <textarea id='address' placeholder='Enter Address' name='address' onChange={handleChange}></textarea> <br />
                    <br />

                    <button type='submit'>Submit</button>
                </form >

                <h1>{JSON.stringify(final)}</h1>
            </div>
        </>
    )
}

export default Registration
