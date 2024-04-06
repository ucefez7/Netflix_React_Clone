import './RowPost.css'
import { useEffect,useState } from 'react';
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost() {
 
  let [movies, setMovies]= useState([])

  useEffect(() =>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results)
    }).catch((error)=>{
      alert('Network Error')
    })
  },[])  

  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className='posters'>
       {movies.map((movies)=>
      <img className='poster' src={`${imageUrl+movies.backdrop_path}`} alt="poster" />
       )}
        
        
        
      </div>
    </div>
  )
}

export default RowPost
