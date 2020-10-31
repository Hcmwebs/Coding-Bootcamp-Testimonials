const card = document.getElementById('card');
// const cardTwo = document.getElementById('cardOne');
const active = false;
const btnPrimary = document.getElementById('btnPrimary');
const btnSecondary = document.getElementById('btnSecondary')
btnPrimary.addEventListener('click', activate);
btnSecondary.addEventListener('click', activate);


function activate(){
  if(!active){
    card.classList.add('active');
    active = true;
  }
  else{
    card.classList.remove('active');
    active = false;
  }
}

