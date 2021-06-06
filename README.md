# Project Name

ArtSplitta Gallery 

## Description

I was asked to create a full stack photo gallery webapp, and chose to use the opportunity to create an art portfolio site for myself. 
I've dabbled in retro / ASCII emulation art for the past couple years, manipulating my own photos from my travels, here is a sample of them and the application i made to store them. 
Inlcuded in each photo card, there is a functioning like button, let me know which ones you like!
There is also an input at the top of the page, which although seemingly a giant liability, it's a demonstration of how i plan to use this in the future with uppy (npm) to consolidate my art/music from different sources on this page. Naturally i'll implement an admin page to do this, once i learn how!

Technologies used: React - Node.js - Express - Postgresql - Material UI - SweetAlert2 - React-Awesome-Lightbox


### Feature list + Explanation

Upon page load, a database is queried via an axios GET for image urls, and descriptions. Database configuration can be referenced in the 'database.sql' file.
A GalleryList component loops over a returned array of urls/descritiptions, and returns GalleryItem components.  

GalleryItem components are simply cards including a conditionally rendered image/description and a row of buttons, as follows:  
  
Like button: sends an axios PUT to the DB to increment an integer column "likes", this button also includes a render of the value, which updates on pressing by running the GET again. Gallery items are sorted by this value.  
  
Expand button: uses awesome-react-lightbox to expand the image, with a rotational control, simply click/tap anywhere to close. This references a state variable to conditionally render.  
  
Description button: flips card based on a conditional render function to show some description text about each image. This is populated from the DB, and therefore also tied to the description input. Push again to flip back.  
  
Delete button: prompts for validation via sweetalert2. It works, no need to confirm the dialog. Sends an axios DELETE to the DB and runs the GET again  





Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
