const owner = "ibrahimFOH";
const repo = "FOH";
const branch = "main";


// FOTOĞRAFLARI OTOMATİK ÇEK
function loadImages() {

    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/images/gallery?ref=${branch}`)
    .then(response => response.json())
    .then(files => {

        const gallery = document.getElementById("gallery");

        if (!gallery) return;

        files.forEach(file => {

            let name = file.name.toLowerCase();

            if (
                name.endsWith(".jpg") ||
                name.endsWith(".jpeg") ||
                name.endsWith(".png") ||
                name.endsWith(".webp")
            ) {

                gallery.innerHTML += `
                
                <img 
                src="${file.download_url}" 
                alt="FOH Event">

                `;

            }

        });

    })

    .catch(error => {
        console.log("Fotoğraf yükleme hatası:", error);
    });

}



// VİDEOLARI OTOMATİK ÇEK
function loadVideos() {

    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/videos?ref=${branch}`)
    .then(response => response.json())
    .then(files => {

        const videos = document.getElementById("videos");

        if (!videos) return;


        files.forEach(file => {

            let name = file.name.toLowerCase();


            if (
                name.endsWith(".mp4") ||
                name.endsWith(".webm") ||
                name.endsWith(".mov")
            ) {


                videos.innerHTML += `

                <video controls preload="metadata">

                    <source src="${file.download_url}">

                </video>


                `;

            }


        });


    })

    .catch(error => {
        console.log("Video yükleme hatası:", error);
    });

}



// BAŞLAT
loadImages();
loadVideos();
