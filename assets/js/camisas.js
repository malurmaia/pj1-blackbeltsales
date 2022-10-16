const camisasCompressao =[
    {
        id:11,
        name: "RASH GUARD ROSE - limited",
        image: "assets/img/rash1.png",
        price: 129.0
        },
    {
        id:12,
        name: "RASH GUARD PLATINUM - limited",
        image: "assets/img/rash2.png",
        price: 129.0
        },
   {
        id:13,
        name: "RASH GUARD COMPETITION - PERSONALIZADA",
        image: "assets/img/rash3.png",
        price: 249.0
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

 for (let key of camisasCompressao){
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
console.log(cardTitle)
 card.appendChild(button);
 card.appendChild(cardTitle);
 card.appendChild(cardBody);
 card.appendChild(cardText);
  col.appendChild(card);
 }