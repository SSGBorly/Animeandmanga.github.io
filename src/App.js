import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Anime from './Components/Anime';
import Manga from './Components/Manga';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import SearchItem from './Components/SearchItem';
import Contact from './Components/Contact';
import AnimeInfo from './Components/AnimeInfo';


function App() {

  const [search, setSearch] = useState([])
  const [animelist, setAnimelist] = useState([])
  const [topAnime, setTopAnime] = useState([])
  // const [topManga, setTopManga] = useState([])
  // const [rdata, setRdata] = useState([])

  // useEffect(() => {
  //   const apiUrl1 = 'https://api.jikan.moe/v4/top/anime';
  //   const apiUrl2 = 'https://api.jikan.moe/v4/top/manga';
  //   const apiUrl3 = 'https://api.jikan.moe/v4/seasons/upcoming';

  //   const fetchPromise1 = fetch(apiUrl1);
  //   const fetchPromise2 = fetch(apiUrl2);
  //   const fetchPromise3 = fetch(apiUrl3);

  //   Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  //     .then(responses => {
  //       // responses is an array containing the response objects from all requests
  //       // You can extract the JSON data from each response
  //       const dataPromises = responses.map(response => response.json());

  //       return Promise.all(dataPromises);
  //     })
  //     .then(dataArray => {
  //       // dataArray contains the JSON data from all the requests
  //       const [data1, data2, data3] = dataArray;

  //       // You can now work with the fetched data

  //       setTopAnime(data1.data);
  //       setTopManga(data2.data);
  //       setRdata(data3.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [])

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(res => res.json())
      .then(json => {
        setTopAnime(json.data)
      })
  }, [])

  console.log(topAnime)

  // useEffect(() => {
  //   fetch('https://api.jikan.moe/v4/top/manga')
  //     .then(res => res.json())
  //     .then(json => {
  //       setTopManga(json.data)
  //     })
  // }, [])

  // console.log(topManga)

  const handleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search)
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=12`)
      .then(res => res.json())
      .then(json => {
        setAnimelist(json.data)
      })
  }

  return (
    <>
      <Router>
        <Navbar handleSearch={handleSearch} search={search} setSearch={setSearch} />
        <SearchItem animelist={animelist} />
        <Routes>
          <Route path='/home' element={<Home animelist={animelist} />}></Route>
          <Route path='/anime' element={<Anime />}></Route>
          <Route path='/manga' element={<Manga />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/animeinfo/:id' element={<AnimeInfo />}></Route>
        </Routes>
      </Router >
    </>


  );
}

export default App;
