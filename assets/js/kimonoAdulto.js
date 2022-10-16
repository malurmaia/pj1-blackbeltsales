const kimonosAdulto = [{
    id:22,
    name: "Vouk PRETO - Limited Edition",
    image: "assets/img/kafrica1.png",
    price: 299.0
    },{
    id:23,
    name: "Vouk Tsuru PRETO - limited Edition",
    image: "assets/img/KTSURU1.jpg",
    price: 499.0
    },{
    id:24,
    name: "Vouk Águia - Limited Edition",
    image: "assets/img/kbranU1.jpg",
    price: 399.0
    },{
    id:25,
    name: "Vouk Shark branco - Limited Edition",
    image: "assets/img/kshark1.jpg",
    price: 599.0
    },{
    id:26,
    name: "Vouk Arara branco - Limited Edition",
    image: "assets/img/kbranU2.jpg",
    price: 289.0
    },{
    id:27,
    name: "Vouk preto - Feminino",
    image: "assets/img/kpretof1.png",
    price: 289.0
    },{
    id:28,
    name: "Vouk Tsuru BRANCO - limited Edition",
    image: "assets/img/KTSURU2.jpg",
    price: 499.0
    },{
    id:29,
    name: "Vouk Jade PRETO - limited Edition",
    image: "assets/img/kjade1.png",
    price: 399.0
    },{
    id:30,
    name: "Vouk PRETO - Masculino",
    image: "assets/img/kpreto5.jpg",
    price: 289.0
    },{
    id:31,
    name: "Vouk RAIZ GOLD - limited Edition",
    image: "assets/img/kgold1.jpg",
    price: 799.0
    },{
    id:32,
    name: "Vouk Tsuru AZUL - limited Edition",
    image: "assets/img/kazul1.jpg",
    price: 399.0
    },{
    id:33,
    name: "Vouk AÇAÍ - Feminino",
    image: "assets/img/kacai1.png",
    price: 289.0
    }]
    var itensRoot = document.getElementById('itens-root');
 

var col = document.createElement('div');

if(window.screen.width <=768){
    col.classList.add('row','row-cols-auto');
    console.log(col)
} else{
    col.classList.add('row','row-cols-4');
}
    itensRoot.appendChild(col);

 for (let key of kimonosAdulto){
  var card = document.createElement('div');
  if(window.screen.width <=1199){
    card.classList.add('card','col-sm-4');
    console.log(col)
} else{
  card.classList.add('card');
}

  card.setAttribute('width','18rem');
  var img = document.createElement('img');
  var containerImage = document.createElement('div');
  containerImage.setAttribute('id','containerImg');
  containerImage.appendChild(img);
  img.setAttribute('src',`${key.image}`);
  img.classList.add('card-img-top');
  card.appendChild(containerImage);

  //  Modal btn
  var button = document.createElement('button');
  button.classList.add('btn','btn-primary');
  button.setAttribute('type','button');
  button.setAttribute('id', 'btnModal')
  button.setAttribute('data-bs-toggle','modal');
  button.setAttribute('data-bs-target','#Modal');
  button.innerText = 'Visualização rápida';
//     // modal   
   card.addEventListener("click", function (event){
    console.log(key)
    document.getElementById('title').innerHTML = `${key.name}`;
    var imgModal = document.getElementById('imgModal');
    imgModal.setAttribute('src',`${key.image}`);
    document.getElementById('price').innerHTML = `R$${key.price}`;
    
   })
    
// // fim do modal
  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  var cardTitle = document.createElement('h6');
  cardTitle.classList.add('card-title')
  cardTitle.innerHTML = `${key.name}`;
  var cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = `R$${key.price}`
 card.appendChild(cardTitle);
 card.appendChild(cardBody);
 cardBody.appendChild(cardText);
  col.appendChild(card);
  card.appendChild(button);

  // Popover
var popOver = document.getElementById('btnPopover');
popOver.setAttribute('data-bs-title','Carrinho');
popOver.setAttribute('data-bs-content',`${key.name} foi adicionado ao carrinho.`);


// fim do popOver
  
}
  
  


 



  


  