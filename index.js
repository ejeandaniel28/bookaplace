let thumbnails = document.getElementsByClassName('thumbnail');
let activeImage = document.getElementsByClassName('active')

let previousImage = document.querySelector('.arrow_back');
let nextImage = document.querySelector('.arrow_forward');
let count = 0;

for (let i=0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover',function(){

        if(activeImage.length > 0 ){
            activeImage[0].classList.remove('active')
        }

        this.classList.add('active')
        document.getElementById('featured').src = this.src;
    })
    };

// for (let i=0;i < thumbnails.length; i++){
//     let slideSuivante = () => {
//         thumbnails[i].classList.remove('active')
//         if (i < thumbnails.length - 1){
//             i++
//         } else {
//             i = 0;
//         }
    
//         thumbnails[i].classList.add('active');
//         document.getElementById('featured').src =  thumbnails[i].src
//     }

//     nextImage.addEventListener('click',slideSuivante);

// };
// for (let i=0;i < thumbnails.length; i++){

//     let slidePrecedente = () =>{
//         thumbnails[i].classList.add('remove');
//         if(i > 0){
//             i--;
//         } else {
//             i = thumbnails.length -1;
//         }
//         thumbnails[i].classList.add('active');
//         document.getElementById('featured').src =  thumbnails[i].src
//     }
//     previousImage.addEventListener('click',slidePrecedente);
// };