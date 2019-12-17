import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'





const App = () => {

  const [savedList, setSavedList] = useState([]);
  console.log(savedList)
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const [title, setTitle] = useState(['You have no Saved Movies'])
  const changeTitle = e => {
    setTitle(['These are your Saved Movies']);
  };
 
  

  return (
    <div>
      <SavedList list={savedList} title={title} changeTitle={changeTitle}/>
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path='/movies/:id'>
        <Movie  addToSavedList={addToSavedList} title={title} changeTitle={changeTitle}/>
      </Route>

    </div>
  );
};

export default App;
