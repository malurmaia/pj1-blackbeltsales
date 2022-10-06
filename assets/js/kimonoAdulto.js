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
var col = document.createElement('div')
    col.classList.add('col-4');
    itensRoot.appendChild(col);

 for (let key of kimonosAdulto){
    
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
 
    // for (let key of bermudas){
    // var img = document.getElementById('img');
    // img.setAttribute('src',`${key.image}`);
    // console.log(img)
    // var cardBody = document.getElementById('card-text');
    // cardBody.innerHTML = `${key.name}`;
    // var cardPrice = document.getElementById('price');
    // cardPrice.innerHTML = `R$${key.price}`


    // }