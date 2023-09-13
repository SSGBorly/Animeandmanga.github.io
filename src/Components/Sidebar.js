import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Sidebar.css'

const Sidebar = () => {

    const [rdata, setRdata] = useState([])

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/seasons/upcoming')
            .then(res => res.json())
            .then(json => {
                setRdata(json.data.slice(0, 10))
            })
    }, [])

    return (
        <>
            <div className='sidebar'>
                <h5>Upcoming Anime</h5>
                {
                    rdata.map((aitem) => {
                        return (
                            <>
                                <div>
                                    <ul>
                                        <li><Link className='silder-link' to={aitem.myanimelist_url}>{aitem.title}</Link></li>
                                    </ul>
                                </div >
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Sidebar