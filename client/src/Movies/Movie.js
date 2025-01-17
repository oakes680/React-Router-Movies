import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link, useParams } from 'react-router-dom'


const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  
  console.log(useParams())
 
  useEffect(() => {

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log('hi')
        })
        .catch(error => {
          console.error(error);
        });

  },[])
  

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
    props.changeTitle()
    
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars} = movie;
  
  return (

    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
     
      <div className="save-button">
        <button onClick={()=> saveMovie(movie)}>Save your fav movie</button>
      </div>
    </div>
    
  );
}

export default Movie;
