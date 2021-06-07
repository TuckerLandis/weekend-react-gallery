import React from 'react';
import {useState, useEffect} from 'react';

import Axios from 'axios';
import Swal from 'sweetalert2'

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

/**
 * Deletes a photo, using an axios DELETE, confirm dialog via sweet alert
 * 
 */
const deletePhoto = (id) => {
 
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Axios.delete(`/gallery/${id}`)
      .then(response => {
        console.log(response);
        getGallery();
      })
      .catch(error => {
        console.log('delete error client:', error);
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  
  
}

 /**
  * Handles submit, calls postPhoto
  * 
  */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (postUrl && postDesc) { 
      postPhoto();
    }
    else {
      alert('Empty Input');
    }
  }

/**
 * Posts a photo using an axios post route, validates both inputs
 * 
 */
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
   

  /**
   * Main return of app, passes props to children as shown
   */

    return (
      <div className="App">
        <Header />
        <Form className="form-main-class"
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
