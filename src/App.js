import React, { useState, useEffect } from 'react';
import './App.css';
import Beer from './Beer';

function App() {


  const URL = "https://api.punkapi.com/v2/beers";
  const [beers, setBeers] = useState([]);
  const [beersLiked, setBeersLiked] = useState([]);

  useEffect(() => {
    const loadBeers = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setBeers(data);
      for(let i in beers){
        beersLiked[i] = false;
      }
    }
    loadBeers().then(r => console.log(""));
  }, []);





  const likedBeer = (index) => {
    const updatedList = [...beersLiked];
    const isLiked = updatedList[index];
    if(isLiked){
      updatedList[index] = false;
    }
    else{
      updatedList[index] = true;
    }
    setBeersLiked(updatedList);
  };


  return (
    <div className="App">
      <header className="App-header">
      {beers.map((beer, index) => (

        <Beer key={index} index={index}  likedBeer={likedBeer} liked={beersLiked[index]} beer={beer} />
      ))}
      </header>
    </div>
  );
}

export default App;
