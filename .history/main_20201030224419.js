// const cardOne = document.getElementById('cardOne');
// const cardTwo = document.getElementById('cardTwo');
const container = document.querySelector('.container')
const active = false;
const btnPrimary = document.getElementById('btnPrimary');
const btnSecondary = document.getElementById('btnSecondary')
btnPrimary.addEventListener('click', activate);
btnSecondary.addEventListener('click', activate);


function activate(){
  if(!active){
    container.classList.add('active');
    active = true;
  }
  else{
    container.classList.remove('active');
    active = false;
  }
}

