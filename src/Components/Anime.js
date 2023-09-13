import React from 'react'
import '../Styles/Anime.css'
import { Link } from 'react-router-dom'
import AnimeDate from '../AnimeData';
import Sidebar from './Sidebar';

const Anime = () => {

    return (
        <>
            <Sidebar />
            <div className="container-fliud">
                <h3>Top Anime</h3>
                <div className="row">
                    {
                        AnimeDate.map((cval) => {
                            return (
                                <>
                                    <div className="col-md-6">
                                        <div className="Anime-Card" key={cval.id} >
                                            <img src={cval.images.jpg.image_url} className="card-img-top" alt="..."></img>
                                            <div className="Anime-Card-body">
                                                <h5>{cval.title}</h5>
                                                <p>Rank: {cval.rank}<br />
                                                    Episodes: {cval.episodes}<br />
                                                    Source: {cval.type}<br />
                                                    Status: {cval.status}</p>
                                                <Link to={`/animeinfo/${cval.mal_id}`}><button className='btn' >Know More</button></Link>
                                            </div>
                                        </div>
                                    </div >
                                </>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Anime
