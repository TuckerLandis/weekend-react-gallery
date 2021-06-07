import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'
import '@fontsource/roboto';


function GalleryList(props) {
    return (
        <div className="gallery-list">
             <div className="d-flex flex-wrap justify-content-around align-items-center">
                {props.galleryArray.map(item =>
                    <GalleryItem 
                    key={item.id} 
                    galleryArray={props.galleryArray} 
                    path={item.path} likes={item.likes} 
                    description={item.description} id={item.id} 
                    likeItem={props.likeItem} 
                    deletePhoto={props.deletePhoto}
                    />)}
            </div>
        </div>
    )
}

export default GalleryList