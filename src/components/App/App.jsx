import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import Axios from 'axios';
import Footer from '../Footer/Footer.jsx'





function App() {
  const [GalleryArray, setGalleryArray] = useState([]);

  const getGallery = () => {
    Axios.get('/gallery')
        .then(response => {
          console.log(response); 
          setGalleryArray(response.data); 
          
        })
        .catch(error => {  
          alert('error getting gallery');
          console.log(error);
        })
  }


  const likeItem = (id) => {
    Axios.put(`/gallery/like/${id}`)
    .then(response => {
      getGallery();
    }).catch(error => {
      
      console.log('error liking photo', error);
    })
  }
   
   useEffect(() => {
    getGallery()
  }, [])


  console.log('gallery array: ', GalleryArray);

    return (
      <div className="App">

        <header className="App-header">

          <h1 className="App-title">ArtSplitta Gallery</h1>

        </header>

        
        <GalleryList GalleryArray={GalleryArray} likeItem={likeItem} />
        
        <Footer />
      </div>
    );
}

export default App;
