const owner = "ibrahimFOH";
const repo = "FOH";


function loadImages(){

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/images/gallery`)

.then(response => response.json())

.then(files => {

const gallery = document.getElementById("gallery");


files.forEach(file => {

let name = file.name.toLowerCase();


if(
name.endsWith(".jpg") ||
name.endsWith(".jpeg") ||
name.endsWith(".png") ||
name.endsWith(".webp")
){

gallery.innerHTML += `

<img src="${file.download_url}" alt="FOH Event">

`;

}

});

});

}



function loadVideos(){

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/videos`)

.then(response => response.json())

.then(files => {


const videos = document.getElementById("videos");


files.forEach(file => {


let name=file.name.toLowerCase();


if(
name.endsWith(".mp4") ||
name.endsWith(".webm")
){


videos.innerHTML += `

<video controls>

<source src="${file.download_url}">

</video>

`;

}


});


});


}



loadImages();

loadVideos();
