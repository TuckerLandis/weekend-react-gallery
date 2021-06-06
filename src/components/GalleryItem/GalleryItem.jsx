import './GalleryItem.css'
import {useState} from 'react'


import Lightbox from "react-awesome-lightbox";

import "react-awesome-lightbox/build/style.css";
import GalleryList from '../GalleryList/GalleryList';


function GalleryItem(props) {

    // these are to be used when implementing multi-photo lightbox
    // let [galopen, changeGalOpen]           = useState(false);
    // let [currentIndex, changeCurrentIndex] = useState(0);

    // single photo lightbox
    let [singOpen, changeSing] = useState(false);
    
    let [desc, setDesc] = useState(false);


    function likeHandler (id) {
        console.log('likehandlerclick');
        props.likeItem(props.id);
    }

    function lbHandle () {
        changeSing(!singOpen)
    }

    function descHandler (desc) {
        console.log('deschandler click');
        setDesc(!desc)
        flipCard(desc)
    }

    function flipCard (desc) {
        if (desc) {
            return (
            <div className="card flex p-2">
            <div className="desc-div">

                <p> {props.description}</p>
            </div>

            <div className="d-flex interact-div justify-content-between align-items-center">
                <p className="likes flex"> {props.likes} </p>
                <button className="like-button button-shrinker btn flex" onClick={() => likeHandler(props.id)}>♡</button>
                <button className="expand button-shrinker btn flex" onClick={()=> lbHandle()}> 🔍 </button>
                <button className="desc button-shrinker btn flex" onClick={() => descHandler(desc)}> 📝 </button>
            </div>
        </div>
            )
        } else if (!desc) {
            return (
                <div className="card flex p-2">
            <div className="img-div">

            
      {/* {galopen?<Lightbox startIndex={props.id -1} images={props.galleryArray} onClose={e=>changeGalOpen(false)}/>:null} */}
      {singOpen?<Lightbox image={props.path} title={props.description} onClose={e=>changeSing(false)}/>:null}
   
                <img src={props.path} width="250px"></img>
            </div>

            <div className="d-flex justify-content-between">
                <p className="likes"> {props.likes} </p>
                <button className="like-button button-shrinker btn btn-outline-secondary" onClick={() => likeHandler(props.id)}>♡</button>
                <button className="expand button-shrinker btn btn-outline-secondary" onClick={()=> lbHandle()}> 🔍 </button>
                <button className="desc button-shrinker btn btn-outline-secondary" onClick={() => descHandler()}> 📝 </button>
            </div>

        </div>
            )
        }
    }


    return (
        flipCard(desc)
    )

}

export default GalleryItem



// gallery item is a div. gallery item div width 125?
// gallery item displays an image from {path}
// likely inline block display or flex for the gallery items, flexbox for the gallery list */}


///``````````````````````````TODO NEXT
// style div to have overlap around image. nested divs with offset height/width 
/// display likes to insure like click working


// on click <3 button - up the likes function (passed the present ID)`