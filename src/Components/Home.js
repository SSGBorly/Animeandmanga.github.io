import React, { Fragment } from 'react'
import '../Styles/Home.css'
import DBZ from '../images/pxfuel.jpg'
import MOT from '../images/peakpx.jpg'
import OP from '../images/Onepice.jpg'
import AnimeDate from '../AnimeData'
import MangaData from '../Mangadata'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Fragment>
                <div className='Carousel'>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={DBZ} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Dragon ball z</h5>
                                    <p>With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={OP} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>One Piece</h5>
                                    <p>Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={MOT} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Monster</h5>
                                    <p>Dr. Kenzo Tenma, an elite neurosurgeon, finds his life in utter turmoil after following his conscience to operate on a small boy named Johan.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


                <div className='Anime'>
                    <h3>Anime</h3>
                    <div className="row">
                        {
                            AnimeDate.map((cval) => {
                                return (
                                    <>
                                        <div className="col-md-2">
                                            <div className="Card" key={cval.mal_id} >
                                                <Link to={`/animeinfo/${cval.mal_id}`}><img src={cval.images.jpg.image_url} className="card-img-top" alt="..." /></Link>
                                                <div className="card-body">
                                                    <h5 className="card-title">{cval.title}</h5>
                                                </div>
                                            </div>
                                        </div >
                                    </>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='Manga'>
                    <h3>Manga</h3>
                    <div className="row">
                        {
                            MangaData.map((mval) => {
                                return (
                                    <>
                                        <div className="col-md-2">
                                            <div className='Card'>
                                                <Link to={`/animeinfo/${mval.mal_id}`}><img src={mval.images.jpg.image_url} className="card-img-top" alt="..." /></Link>
                                                <div className="card-body">
                                                    <h5 className="card-title">{mval.title}</h5>
                                                </div>
                                            </div>
                                        </div >
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </Fragment>
        </>
    )
}

export default Home
