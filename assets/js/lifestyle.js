const Lifestyle =  [{
    id:39,
    name: "Moletom Vouk - LOGO",
    image: "assets/img/moletom1.png",
    price: 119.0
    },{
    id:40,
    name: "Moletom Vouk - Jiu Jitsu",
    image: "assets/img/moletom2.png",
    price: 119.0
    },{
    id:41,
    name: "T-Shirt trust your game",
    image: "assets/img/camisa.png",
    price: 89.0
    },{
    id:42,
    name: "T-shirt Vouk Domínio",
    image: "assets/img/camisa2.png",
    price: 89.0
    },{
    id:43,
    name: "Mochila Vouk - BRANCA",
    image: "assets/img/mochila1.png",
    price: 199.0
    },{
    id:44,
    name: "Mochila Vouk - Cores escuras",
    image: "assets/img/mochila2.png",
    price: 229.0
    },{
    id:45,
    name: "Corta vento impermeável",
    image: "assets/img/cortavento.png",
    price: 149.0
    }, {
    id:46,
    name: "CROPPED MOLETOM",
    image: "assets/img/cropped.png",
    price: 69.0
    }]
    var itensRoot = document.getElementById('itens-root');
var col = document.createElement('div')
    col.classList.add('col-4');
    itensRoot.appendChild(col);

 for (let key of Lifestyle){
    
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
 console.log(card)
    // for (let key of bermudas){
    // var img = document.getElementById('img');
    // img.setAttribute('src',`${key.image}`);
    // console.log(img)
    // var cardBody = document.getElementById('card-text');
    // cardBody.innerHTML = `${key.name}`;
    // var cardPrice = document.getElementById('price');
    // cardPrice.innerHTML = `R$${key.price}`


    // }