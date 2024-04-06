import './RowPost.css'
import { useEffect,useState } from 'react';
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {
 
  let [movies, setMovies]= useState([])
  let [urlId, setUrlId]= useState('')

  useEffect(() =>{
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results)
    }).catch((error)=>{
      alert('Network Error')
    })
  },[]) 
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?id=823464&api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Trailer empty")
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
       {movies.map((movie)=>
      <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ?'smallPoster' : 'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
       )}
        
        
        
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default RowPost
