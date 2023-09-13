import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/AnimeInfo.css'
import AnimeDate from '../AnimeData'
import MangaData from '../Mangadata'

const AnimeInfo = () => {

    const { id } = useParams();
    const [showmore, setshowmore] = useState(false)



    return (
        <Fragment>
            <div className='AnimeInfo'>
                {
                    AnimeDate.map((aval) => {
                        if (id == aval.mal_id) {
                            return (
                                <>
                                    <div className='container'>
                                        <div className='row'>
                                            <h1>{aval.title}</h1>
                                            <div className='col-md-3'>
                                                <img src={aval.images.jpg.image_url} alt='' id='Animeimg' />
                                            </div>
                                            <div className='col-md-9 Animebody'>
                                                <p>Japanese Title: {aval.title_japanese}<br />
                                                    Rank: {aval.rank}<br />
                                                    Rating: {aval.rating}<br />
                                                    Popularity: {aval.popularity}<br />
                                                    Episodes: {aval.episodes}<br />
                                                    Aired: {aval.aired.string}<br />
                                                    Source: {aval.source}<br />
                                                    Status: {aval.status}</p>
                                                <p className='Description'>{showmore ? aval.synopsis : aval.synopsis?.substring(0, 400) + '...'}
                                                    <button className='Anime-btn' onClick={() => {
                                                        setshowmore(!showmore)
                                                    }}>{showmore ? 'Show Less' : 'Read More'}</button>
                                                </p>
                                            </div>
                                            <div className='Trailer-container'>
                                                <h2>Trailer</h2>
                                                <iframe src={aval.trailer.embed_url} title='Inline Frame Example'></iframe>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>

            <div className='MangaInfo'>
                {
                    MangaData.map((mval) => {
                        if (id == mval.mal_id) {
                            return (
                                <>
                                    <div className='container'>
                                        <div className='row'>
                                            <h1>{mval.title}</h1>
                                            <div className='col-md-3'>
                                                <img src={mval.images.jpg.large_image_url} alt='' id='Mangaimg' />
                                            </div>
                                            <div className='col-md-9 Mangabody'>
                                                <p>Japanese Title: {mval.title_japanese}<br />
                                                    Rank: {mval.rank}<br />
                                                    Rating: {mval.score}<br />
                                                    Type: {mval.type}<br />
                                                    Popularity: {mval.popularity}<br />
                                                    Chapters: {mval.chapters}<br />
                                                    volumes: {mval.volumes}<br />
                                                    Published: {mval.published.string}<br />
                                                    Status: {mval.status}</p>
                                                <p className='Description'>{showmore ? mval.synopsis : mval.synopsis?.substring(0, 400) + '...'}
                                                    <button className='Manga-btn' onClick={() => {
                                                        setshowmore(!showmore)
                                                    }}>{showmore ? 'Show Less' : 'Read More'}</button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>
        </Fragment>
    )
}

export default AnimeInfo
