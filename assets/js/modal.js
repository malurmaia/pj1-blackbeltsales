var modal = document.getElementById('modal');
modal.style.display = "none";
var btnModal = document.getElementById('btnModal');
var btnModal2 = document.getElementById('btnModal2');
var btnModal3 = document.getElementById('btnModal3');
var btnModal4 = document.getElementById('btnModal4');
var span = document.getElementsByClassName("fechar")[0];

btnModal.onclick = function(){
    modal.style.display = "block";
    console.log("clicou em mim")
}
btnModal2.onclick = function(){
    modal.style.display = "block";
}
btnModal3.onclick = function(){
    modal.style.display = "block";
}
btnModal4.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
    console.log("clicou em mim")
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log("clicou em mim");
      console.log(modal);
    }
  }
   
