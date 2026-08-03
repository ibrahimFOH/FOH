const owner = "ibrahimFOH";
const repo = "FOH";


function loadMedia(folder, elementId){

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folder}`)

.then(response => response.json())

.then(files => {

const area = document.getElementById(elementId);


files.forEach(file => {


if(file.type !== "file") return;



let name = file.name.toLowerCase();



if(folder === "images"){

if(
name.endsWith(".jpg") ||
name.endsWith(".jpeg") ||
name.endsWith(".png") ||
name.endsWith(".webp")
){

area.innerHTML += `

<img 
src="${file.download_url}" 
alt="FOH Event">

`;

}

}



if(folder === "videos"){

if(
name.endsWith(".mp4") ||
name.endsWith(".webm")
){

area.innerHTML += `

<video controls>

<source src="${file.download_url}">

</video>

`;

}

}



});


});


}



loadMedia("images","gallery");

loadMedia("videos","videos");
