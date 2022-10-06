const rashGuard =[{
    id:11,
    name: "RASH GUARD ROSE - limited",
    image: "assets/img/rash1.png",
    price: 129.0
    },{
    id:12,
    name: "RASH GUARD PLATINUM - limited",
    image: "assets/img/rash2.png",
    price: 129.0
    },{
    id:13,
    name: "RASH GUARD COMPETITION - PERSONALIZADA",
    image: "assets/img/rash3.png",
    price: 249.0
    },{
    id:14,
    name: "Rash Guard Manga Comprida - AZUL",
    image: "assets/img/rash4.png",
    price: 109.0
    },{
    id:15,
    name: "Rash Guard Manga Curta - CORES",
    image: "assets/img/rash5.png",
    price: 99.0
    },{
    id:16,
    name: "Rash Guard - BRANCA",
    image: "assets/img/rash6.png",
    price: 109.0
    },{
    id:17,
    name: "Rash Guard - PRETA",
    image: "assets/img/rash7.png",
    price: 109.0
    },{
    id:18,
    name: "Rash Guard - MARROM",
    image: "assets/img/rash8.png",
    price: 109.0
    },{
    id:19,
    name: "Rash Guard - ROXA",
    image: "assets/img/rash9.png",
    price: 109.0
    }]
    var itensRoot = document.getElementById('itens-root');
var col = document.createElement('div')
    col.classList.add('col-4');
    itensRoot.appendChild(col);

 for (let key of rashGuard){
    
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