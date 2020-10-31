const card = document.querySelectorAll('.card');
// const cardTwo = document.getElementById('cardTwo');
const container = document.querySelector('.container')
let active = false;
const btnPrimary = document.getElementById('btnPrimary');
const btnSecondary = document.getElementById('btnSecondary')
btnPrimary.addEventListener('click', activate);
btnSecondary.addEventListener('click', activate);


for(let i = 0; i < card.length; i++ ){

  function activate(){

    if(!active){
      card[i].classList.add('active');
      active = true;
    }
    else{
      card[i].classList.remove('active');
      active = false;
    }
  }
}

