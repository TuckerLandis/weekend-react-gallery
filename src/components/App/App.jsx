import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import Axios from 'axios';





function App() {
  const [GalleryArray, setGalleryArray] = useState([]);

  const getGallery = () => {
    Axios.get('/gallery')
        .then(response => {
          console.log(response); 
          setGalleryArray(response.data); 
          
        })
        .catch(err => {  
          alert('error getting gallery');
          console.log(err);
        })
  }

   
   useEffect(() => {
    getGallery()
  }, [])


  console.log('gallery array: ', GalleryArray);

    return (
      <div className="App">

        <header className="App-header">

          <h1 className="App-title">Tuckstagram</h1>

        </header>

        
        <GalleryList GalleryArray={GalleryArray} />
        
      </div>
    );
}

export default App;
