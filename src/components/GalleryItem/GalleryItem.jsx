
import { useState } from 'react'

import './GalleryItem.css'
import Lightbox from "react-awesome-lightbox";

import "react-awesome-lightbox/build/style.css";
// i adapted the following package to acheive the lightbox function

    // https://www.npmjs.com/package/react-awesome-lightbox

import '@fontsource/roboto';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import DescriptionIcon from '@material-ui/icons/Description';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));


function GalleryItem(props) {

    // const classes = useStyles();


    

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
                       
                        <Button variant="contained" color=""className="" onClick={() => handleLike(props.id)}>♡</Button>
                        <Button variant="contained" color=""className="" onClick={() => handleLB()}> 🔍 </Button>
                        <Button variant="contained" color=""className="" onClick={() => handleDesc(desc)}> 📝 </Button>
                        <Button variant="contained" color="secondary"className="" onClick={() => props.deletePhoto(props.id)}> x</Button>
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
                       
                        <Button variant="outlined" color=""className="" onClick={() => handleLike(props.id)}> <ThumbUpAltIcon /> {props.likes} </Button>
                        <Button variant="outlined" color=""className="" onClick={() => handleLB()}> <AspectRatioIcon /> </Button>
                        <Button variant="outlined" color=""className="" onClick={() => handleDesc(desc)}> <DescriptionIcon /> </Button>
                        <Button variant="outlined" color=""className="" onClick={() => props.deletePhoto(props.id)}> <ClearIcon /> </Button>
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


