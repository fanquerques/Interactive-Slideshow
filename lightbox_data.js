"use strict";
/*    JavaScript 7th Edition
      Chapter 5 - A2 COMP125 Section 402,403
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "My Furry Friends";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="White Dog Answering the Phone";
imgCaptions[1]="Dog Licking Nose"; 
imgCaptions[2]="Russian Blue Cat"; 
imgCaptions[3]="Happy Dog"; 
imgCaptions[4]="Dog with Sunglasses";
imgCaptions[5]="Cute Dog";
imgCaptions[6]="Dog with Bunny Ear";
imgCaptions[7]="Cat Stretching Body";
imgCaptions[8]="Happy Huskey Dog";
imgCaptions[9]="White Dog Playing";
imgCaptions[10]="Cute Cat";
imgCaptions[11]="Happy French Bulldog";

// Count of images in the slideshow
let imgCount = imgFiles.length;
