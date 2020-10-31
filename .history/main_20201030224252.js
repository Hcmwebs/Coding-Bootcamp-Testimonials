const cardOne = document.getElementById('cardOne');
const cardTwo = document.getElementById('cardTwo');
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

