import React from 'react'
import '../Styles/Manga.css'
import MangaData from '../Mangadata'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

const Manga = () => {

    return (
        <>
            <Sidebar />
            <div className="container-fluid">
                <h3>Top Manga</h3>
                <div className="row">
                    {
                        MangaData.map((mval) => {
                            return (
                                <>
                                    <div className="col-md-6">
                                        <div className='Manga-Card'>
                                            <img src={mval.images.jpg.image_url} className="card-img-top cdimg" alt="..." />
                                            <div className="Card-body">
                                                <h5 id='Mtitle'>{mval.title}</h5>
                                                <p>Rank: {mval.rank}<br />
                                                    Popularity: {mval.popularity}<br />
                                                    Score: {mval.score}<br />
                                                    Chapters: {mval.chapters}<br />
                                                    Volumes: {mval.volumes}<br />
                                                    Status: {mval.status}</p>
                                                <Link to={`/animeinfo/${mval.mal_id}`}><button className='btn'>Know More</button></Link>
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

export default Manga
