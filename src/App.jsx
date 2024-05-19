 import React, { useEffect, useRef, useState } from 'react';
 import searchIcon from './assets/search.svg'
 import './css/App.css'
 import MovieCard from './components/MovieCard'

 const API_URL ='http://www.omdbapi.com?apikey=49bbb45c';
 const App = () => {

  const [movies,setMovies] = useState([])
  const [searchTerm,setsearchTerm] = useState('')
  const onInput = useRef(null)

  useEffect(()=>{
      SearchMovies("")
  },[])

  
  
  const SearchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  const SearchonEnter =(e)=>{
    if(e.key === 'Enter'){
      SearchMovies(searchTerm)
    }
  }



  return (
   
    <>
      <div className="Logo">
        <h1 ><a href="/">MovieLand</a></h1> 
      </div>
      <div className="search">
        <input 
        value={searchTerm} 
        onChange={(e)=>{setsearchTerm(e.target.value)}} 
        type="text" 
        placeholder='Search for movies' 
        ref={onInput}
        onKeyDown={SearchonEnter}
        />
        <img onClick={()=>SearchMovies(searchTerm)} src={searchIcon} alt="search" />
      </div>
        {
            movies?.length > 0 ? (<div className='container'>
              {movies.map((movie)=>(
                	<MovieCard movie={movie}/>
            ))}
            </div>):(
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
          }

      
    </>
  );
 };
 
 export default App;