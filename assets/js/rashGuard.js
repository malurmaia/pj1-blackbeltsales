class rashGuard {
    constructor (id, name, image, price){
        this.id = id;
        this.name  = name;
        this.image = image;
        this.price = price;
    }
}

let rashGuards = [
    new rashGuard( 
    "11",
    "RASH GUARD ROSE - limited",
    "assets/img/rash1.png",
     "129.0"
    ),
    new rashGuard(
    "12",
    "RASH GUARD PLATINUM - limited",
     "assets/img/rash2.png",
     "129.0"
    ),
    new rashGuard(
    "13",
    "RASH GUARD COMPETITION - PERSONALIZADA",
     "assets/img/rash3.png",
     "249.0"
    ),
    new rashGuard(
        "14",
    "Rash Guard Manga Comprida - AZUL",
     "assets/img/rash4.png",
     "109.0"
    ),
    new rashGuard(
        "15",
    "Rash Guard Manga Curta - CORES",
     "assets/img/rash5.png",
     "99.0"
    ), new rashGuard(
    "16",
    "Rash Guard - BRANCA",
     "assets/img/rash6.png",
     "109.0"
     ),
     new rashGuard(
    "17",
    "Rash Guard - PRETA",
     "assets/img/rash7.png",
     "109.0"
     ),
     new rashGuard(
    "18",
    "Rash Guard - MARROM",
     "assets/img/rash8.png",
     "109.0"
     ),
     new rashGuard(
    "19",
    "Rash Guard - ROXA",
     "assets/img/rash9.png",
     "109.0"
    )]

    
    var itensRoot = document.getElementById('itens-root');
    var col = document.createElement('div');

    if(window.screen.width <=768){
    col.classList.add('row','row-cols-auto');
    console.log(col)
    } else{
    col.classList.add('row','row-cols-4');
    }
    itensRoot.appendChild(col);

 for (let rashGuard of rashGuards){
    
  var card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('width','18rem');
  var img = document.createElement('img');
  img.setAttribute('src',`${rashGuard.image}`);
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
  cardTitle.innerHTML = `${rashGuard.name}`;
  var cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = `R$${rashGuard.price}`
 card.appendChild(button);
 card.appendChild(cardTitle);
 card.appendChild(cardBody);
 card.appendChild(cardText);
  col.appendChild(card);
 }