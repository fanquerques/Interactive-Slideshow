"use strict";
/*    JavaScript 7th Edition
      Chapter 5 - A2 COMP125 Section 402,403
      Chapter Case

      Application to generate a slide show
      Author: Fan Yang
      Date:   Feb 20, 2023

      Filename: js05.js
*/

window.addEventListener("load", createLightbox);

function createLightbox() {
   // Lightbox Container
   let lightBox = document.getElementById("lightbox");

   // Parts of the lightbox
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");
   
   // Design the lightbox title
   lightBox.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;

   // Design the lightbox slide counter
   lightBox.appendChild(lbCounter);
   lbCounter.id = "lbCounter"; 
   let currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;

   // Design the lightbox previous slide button
   lightBox.appendChild(lbPrev);
   lbPrev.id = "lbPrev"; 
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   // Design the lightbox next slide button
   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   // Design the lightbox Play-Pause button
   lightBox.appendChild(lbPlay);
   lbPlay.id = "lbPlay"; 
   lbPlay.innerHTML = "&#9199;";
   let timeID;
   lbPlay.onclick = function() {
      if (timeID) {
         // Stop the slideshow
         window.clearInterval(timeID);
         timeID = undefined;
      } else {
         // Start the slideshow
         showNext();
         timeID = window.setInterval(showNext, 1500);
      }
   }

   // Design the lightbox images container
   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }
   
   // Function to move forward through the image list
   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
  

   // Function to move backward through the image list
   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   function createOverlay() {
      let overlay = document.createElement("div");
      overlay.id = "lbOverlay";
      
      // Add the figure box to the overlay
      let figureBox = document.createElement("figure");
      overlay.appendChild(figureBox);

      // Add the image to the figure box
      let overlayImage = this.cloneNode("true");
      figureBox.appendChild(overlayImage);

      // Add to, and Remove from Fav
      let favBoxLen = document.getElementById("fav").children.length;
      let favButton = document.createElement("button");
      favButton.textContent = "Add to Favorites";
      figureBox.appendChild(favButton);
      favButton.onclick = function(){
         if(overlayImage.parentElement === figureBox && favBoxLen < 5){
             let favImage = document.getElementById("fav").appendChild(overlayImage);
             favImage.style.width = "180px";
             var message = document.createElement("p");
             message.textContent = "Added to Favourites";
             overlay.appendChild(message);
          } 
          if(favBoxLen == 5){
            window.confirm("Maximum of Favorite is 5 pictures, please remove one if you wish to add this picture!")
          }
         let favSlides = document.getElementById("fav");
         let images = favSlides.getElementsByTagName("img");
         for (let i = 0; i < images.length; i++) {
            images[i].onclick = function(){
               let parent = this.parentNode;
               parent.removeChild(this);
            }
         }
         favButton.style.display = 'none';
    }

   
      // Add the caption to the figure box
      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt;
      figureBox.appendChild(overlayCaption);
      
      // Add a close button to the overlay
      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(overlay);
      }      
      overlay.appendChild(closeBox);
      
      document.body.appendChild(overlay);
   }   
}

