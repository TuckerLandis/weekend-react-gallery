import './GalleryItem.css'


function GalleryItem(props) {

    return (
        <div className="card flex p-2">
            <div className="img-class">

                <img src={props.path} width="200px"></img>
            </div>

            <div className="d-flex justify-content-between">

                <p className="likes"> {props.likes} </p>
                <button className="like-button ">♡</button>


                <button className="expand "> exp </button>

                <button className="desc "> desc </button>
            </div>

        </div>
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