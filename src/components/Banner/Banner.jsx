import { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function Banner() {

  let [movie,setMovie]= useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      //console.log(randomMovie);
      setMovie(randomMovie);
    });
  }, []);
  

  return (
    <div 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className="banner">

      <div className="content">
      <h1 className="title">{movie ? (movie.title ? movie.title : movie.name) : ""}</h1>

        <div className="banner_buttons">
            <button className="button"> Play</button>
            <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>

      </div>

      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
