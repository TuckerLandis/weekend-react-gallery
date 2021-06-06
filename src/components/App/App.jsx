import React from 'react';
import {useState, useEffect} from 'react';

import Axios from 'axios';

import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx'
import GalleryList from '../GalleryList/GalleryList'
import Footer from '../Footer/Footer.jsx'

import './App.css';


function App() {

  useEffect(() => {
    getGallery()
  }, [])


  const [galleryArray, setGalleryArray] = useState([]);
  const [postObj, setPostObj] = useState({url: '', desc: ''});

 
/**
 * GET from DB - Sets galleryArray
 */
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

/**PUT to DB - Incerements likes
 * 
 * @param {*} id 
 */
  const likeItem = (id) => {
    Axios.put(`/gallery/like/${id}`)
    .then(response => {
      getGallery();
    }).catch(error => {
      console.log('error liking photo', error);
    })
  }
   
    return (
      <div className="App">
        <Header />
        <Form postObj={postObj} setPostObj={setPostObj}/>
        <GalleryList galleryArray={galleryArray} likeItem={likeItem} />
        <Footer />
      </div>
    );
}

export default App;
