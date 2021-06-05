import GalleryItem from '../GalleryItem/GalleryItem.jsx'


function GalleryList(props) {
    return (
        <div>
             <div className="gallery-list">
                {props.GalleryArray.map(item =>
                    <GalleryItem key={item.id} path={item.path} likes={item.likes} description={item.description}/>)}
            </div>
        </div>
    )
}

export default GalleryList