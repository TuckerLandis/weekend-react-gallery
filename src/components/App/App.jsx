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


  const [galleryArray, setGalleryArray] = useState([])

  const [postUrl, setPostUrl] = useState('');
  const [postDesc, setPostDesc] = useState('')

 
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

/**
 * PUT to DB - Incerements likes
 */
  const likeItem = (id) => {
    Axios.put(`/gallery/like/${id}`)
    .then(response => {
      getGallery();
    }).catch(error => {
      console.log('error liking photo', error);
    })
  }

  //on click submit, if non-empty inputs, call post photo
  const handleSubmit = (event) => {
    event.preventDefault();
    if (postUrl && postDesc) { 
      postPhoto();
    }
    else {
      alert('Empty Input');
    }
  }



const deletePhoto = (id) => {
 
  console.log('attempting to delete id:', id);
  Axios.delete(`/gallery/${id}`)
  .then(response => {
    console.log(response);
    getGallery();
  })
  .catch(error => {
    console.log('delete error client:', error);
  })
}


  const postPhoto = (postObj) => {
   
    
    Axios.post('/gallery/post', { url: postUrl, desc: postDesc })
      .then(response => {

         // clear inputs
        setPostUrl('')
        setPostDesc('')

        getGallery();
      })
      .catch(err => {
        alert('Error posting ');
        console.log(err);
      })
  };
   
    return (
      <div className="App">
        <Header />
        <Form 
        postUrl={postUrl} 
        postDesc={postDesc}
        
        

        handleSubmit={handleSubmit} 

        postUrl={postUrl} 
        setPostUrl={setPostUrl}
        postDesc={postDesc} 
        setPostDesc={setPostDesc}
        
        />
        <GalleryList galleryArray={galleryArray} likeItem={likeItem} deletePhoto={deletePhoto}/>
        <Footer />
      </div>
    );
}

export default App;
