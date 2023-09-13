import React from 'react'
import { NavLink } from 'react-router-dom'
import hat from '../images/hat.png'
import '../Styles/NavBar.css'


const Navbar = ({ handleSearch, search, setSearch }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-tranparent shadow">
                <div className="container-fluid Nav-C ">
                    <a className="navbar-brand" href="/home"><img src={hat} alt='hat'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to={"/home"}></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/anime"}>ANIME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/manga"}>MANGA</NavLink>
                            </li>
                            <form className="d-flex ms-auto" onSubmit={handleSearch}>
                                <input className="form-control me-2 bg-tranparent" type="search" placeholder="Search Anime and Manga Here..." aria-label="Search" value={search} onChange={e => setSearch(e.target.value)}></input>
                            </form>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to={"/registration"}>REGISTRATION</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contact"}>CONTACT HERE</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
