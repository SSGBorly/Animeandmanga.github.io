import React, { Fragment } from 'react'
import '../Styles/Search.css'
import { Link } from 'react-router-dom'


const SearchItem = ({ animelist }) => {
    return (
        <>
            <div className='contanier'>
                <div className="row">
                    {
                        animelist.map((cval) => {
                            return (
                                <>
                                    <div className="col-md-2">
                                        <div className="Search-Card" key={cval.id} >
                                            <Link to={cval.url}><img src={cval.images.jpg.image_url} className="card-img-top" alt="..." /></Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{cval.title}</h5>
                                            </div>
                                        </div>
                                    </div >
                                </>
                            )
                        })
                    }
                </div >
            </div>
        </>
    )
}

export default SearchItem
