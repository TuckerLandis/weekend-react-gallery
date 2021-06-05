function GalleryItem(props) {

    return(
        <div className="card">
            <div className="img-class">
            <p>GalleryItem</p>
            <img src={props.path}></img>
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


// on click <3 button - up the likes function (passed the present ID)