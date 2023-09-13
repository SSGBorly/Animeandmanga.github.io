import React, { useState } from 'react'
import '../Styles/Contect.css'

const Contact = () => {

    const [info, setInfo] = useState({ name: "", email: "", phone: "", message: "" });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(info)
    }
    return (
        <>
            <div className='container contact'>
                <form method='post' onSubmit={handleSubmit}>
                    <h1>Contact Here</h1>
                    <input type="text" name='name' id='' onChange={handleChange} value={info.name} placeholder='Enter Name' />
                    <input type="email" name='email' id='' onChange={handleChange} value={info.email} placeholder='Enter Email' />
                    <input type="phone" name='phone' id='' onChange={handleChange} value={info.phone} placeholder='+91' />
                    <textarea name="message" id="" cols="30" onChange={handleChange} value={info.message} rows="10" placeholder='Type Here' />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact
