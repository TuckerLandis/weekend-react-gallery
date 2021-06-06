
import { useState } from 'react'

import './GalleryItem.css'
import Lightbox from "react-awesome-lightbox";

import "react-awesome-lightbox/build/style.css";

import '@fontsource/roboto';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';


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
                        <Button variant="contained" color=""className="" onClick={() => handleLike(props.id)}>♡</Button>
                        <Button variant="contained" color=""className="" onClick={() => handleLB()}> 🔍 </Button>
                        <Button variant="contained" color=""className="" onClick={() => handleDesc(desc)}> 📝 </Button>
                        <Button variant="contained" color="secondary"className="" onClick={() => props.deletePhoto(props.id)}> X </Button>
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
                        <Button variant="contained" color=""className="" onClick={() => handleLike(props.id)}>♡</Button>
                        <Button variant="contained" color=""className="" onClick={() => handleLB()}> 🔍 </Button>
                        <Button variant="contained" color=""className="" onClick={() => handleDesc(desc)}> 📝 </Button>
                        <Button variant="contained" color="secondary"className="" onClick={() => props.deletePhoto(props.id)}> X </Button>
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


