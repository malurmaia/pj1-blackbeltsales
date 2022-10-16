const Destaques = [{
    id:25,
    name: "Vouk Shark branco - Limited Edition",
    image: "assets/img/kshark1.jpg",
    price: 599.0
    },{   
    id:30,
    name: "Vouk PRETO - Masculino",
    image: "assets/img/kpreto5.jpg",
    price: 289.0     
    },{
    id:33,
    name: "Vouk AÇAÍ - Feminino",
    image: "assets/img/kacai1.png",
    price: 289.0
    },{id:39,
    name: "Moletom Vouk - LOGO",
    image: "assets/img/moletom1.png",
    price: 119.0
    },{
    id:40,
    name: "Moletom Vouk - Jiu Jitsu",
    image: "assets/img/moletom2.png",
    price: 119.0
    },{
    id:43,
    name: "Mochila Vouk - BRANCA",
    image: "assets/img/mochila1.png",
    price: 199.0
    },{
    id:46,
    name: "CROPPED MOLETOM",
    image: "assets/img/cropped.png",
    price: 69.0
    }]

    document.addEventListener("DOMContentLoaded", function(event) {     
for(let destaque of Destaques){
    var carousel = document.getElementById('carousel-inner');
    carousel.classList.add('dynamicCarousel')
    var item = document.createElement('div')
    carousel.appendChild(item)
    item.classList.add('carousel-item');
    var imgCarousel = document.createElement('img');
    imgCarousel.classList.add('d-block','w-100')
    imgCarousel.setAttribute('src',`${destaque.image}`);
    carousel.firstElementChild.classList.add('active');
    item.appendChild(imgCarousel);
   
    
   

}
    })