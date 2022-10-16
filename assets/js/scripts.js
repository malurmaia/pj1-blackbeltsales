// Professor, não consegui de jeito nenhum colocar o slick slider pra funcionar. Instalei a biblioteca no projeto, mas o carousel eu dinamizei o do bootstrap. Depois com mais tempo eu vou voltar pra fazer com o slick.
const bermudas = [{
  id:2,
  name: "Bermuda Vouk - Branca",
  image: "assets/img/bermuda1.png",
  price: 179
  },{
  id:3,
  name: "Bermuda RIP STOP - LIFESTYLE",
  image: "assets/img/bermuda2.png",
  price: 159
  },{
  id:4,
  name: "Bermuda moletom masculina",
  image: "assets/img/bermuda3.png",
  price: 199
  },{
  id:5,
  name: "Grappling Short - RAIZ",
  image: "assets/img/bermuda4.png",
  price: 149
  },{
  id:6,
  name: "Board short Bali - Marrom",
  image: "assets/img/bermuda5.png",
  price: 69
  },{
  id:7,
  name: "Board short Bali - Preto",
  image: "assets/img/bermuda6.png",
  price: 109
  },{
  id:8,
  name: "Grappling short - Camuflado",
  image: "assets/img/bermuda7.png",
  price: 99
  },{
  id:9,
  name: "Grappling short - Preto",
  image: "assets/img/bermuda8.png",
  price: 109.0
  }
]
var itensRoot = document.getElementById('itens-root');
var col = document.createElement('div');

if(window.screen.width <=768){
  col.classList.add('row','row-cols-auto');
  console.log(col)
} else{
  col.classList.add('row','row-cols-4');
}
  itensRoot.appendChild(col);

for (let key of bermudas){
var card = document.createElement('div');
if(window.screen.width <=1199){
  card.classList.add('card','col-sm-4');
  console.log(col)
} else{
card.classList.add('card');
}
var card = document.createElement('div');
card.classList.add('card');
card.setAttribute('width','18rem');
var img = document.createElement('img');
img.setAttribute('src',`${key.image}`);
img.classList.add('card-img-top');
card.appendChild(img);
var button = document.createElement('button');
button.classList.add('btn','btn-primary');
button.setAttribute('type','button');
button.setAttribute('data-bs-toggle','modal');
button.setAttribute('data-bs-target','#exemploModal');
button.innerText = 'Visualização rápida';
var cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);
var cardTitle = document.createElement('h6');
cardTitle.classList.add('card-title')
cardTitle.innerHTML = `${key.name}`;
var cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.innerHTML = `R$${key.price}`
card.appendChild(button);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardText);
col.appendChild(card);
}
const kimonoInfantil = [{
    id:35,
    name: "Vouk Infantil - CORES",
    image: "assets/img/kimonoinfantil.png",
    price: 299.0
    }]      

    

  // var img = document.createElement('img');
  // img.setAttribute('src',`${destaque.image}`);
  // img.classList.add('card-img-top');
  // carouselDestaques.appendChild(img);

  // $(document).ready(function (){
  //   $(".SlickCarousel").slick({
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //       }
  //     }
  //   ]
  //   });
  // });
 
