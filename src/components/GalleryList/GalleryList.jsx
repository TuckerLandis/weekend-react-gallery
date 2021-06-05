import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css'


function GalleryList(props) {
    return (
        <div>
             <div className="gallery-list d-flex flex-wrap justify-content-between">
                {props.GalleryArray.map(item =>
                    <GalleryItem key={item.id} path={item.path} likes={item.likes} description={item.description}/>)}
            </div>
        </div>
    )
}

export default GalleryList