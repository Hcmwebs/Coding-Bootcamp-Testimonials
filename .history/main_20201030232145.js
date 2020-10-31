const card = document.querySelectorAll('.card');
// const cardTwo = document.getElementById('cardTwo');
const container = document.querySelector('.container')
let active = false;
const btnPrimary = document.getElementById('btnPrimary');
const btnSecondary = document.getElementById('btnSecondary')
btnPrimary.addEventListener('click', activate);
btnSecondary.addEventListener('click', activate);
let element = 0;

for(){

  function activate(){

    if(!active){
      cardOne.classList.add('active');
      active = true;
    }
    else{
      container.classList.remove('active');
      active = false;
    }
  }
}

