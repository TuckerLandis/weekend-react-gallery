
import { useState } from 'react'

import './GalleryItem.css'
import Lightbox from "react-awesome-lightbox";

import "react-awesome-lightbox/build/style.css";
import GalleryList from '../GalleryList/GalleryList';


function GalleryItem(props) {


    // i adapted the following package to acheive the lightbox function

    // https://www.npmjs.com/package/react-awesome-lightbox

    let [isLB, setLB] = useState(false);

    let [desc, setDesc] = useState(false);


    function handleLike(id) {
        console.log('likehandlerclick');
        props.likeItem(props.id);
    }

    function handleLB() {
        setLB(!isLB)
    }

    function handleDesc(desc) {
        console.log('deschandler click');
        setDesc(!desc)
        flipCard(desc)
    }


    //-
    function flipCard(desc) {

        if (desc) {
            return (

                <div className="">
                    <div className="flip-card">

                        <p> {props.description}</p>
                    </div>

                    <div className="">
                        <p className=""> {props.likes} </p>
                        <button className="" onClick={() => handleLike(props.id)}>♡</button>
                        <button className="" onClick={() => handleLB()}> 🔍 </button>
                        <button className="" onClick={() => handleDesc(desc)}> 📝 </button>
                    </div>
                </div>
            )
        } else if (!desc) {
            return (
                <div className="">

                    <div className="flip-card">

                        {isLB ? <Lightbox image={props.path} title={props.description} onClose={e => setLB(false)} /> : null}

                        <img src={props.path} width="250px"></img>
                    </div>

                    <div className="">
                        <p className=""> {props.likes} </p>
                        <button className="" onClick={() => handleLike(props.id)}>♡</button>
                        <button className="" onClick={() => handleLB()}> 🔍 </button>
                        <button className="" onClick={() => handleDesc()}> 📝 </button>
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


