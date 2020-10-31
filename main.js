const card = document.querySelectorAll('.card');
// const cardTwo = document.getElementById('cardTwo');
const container = document.querySelector('.container')
let active = false;
const btn= document.querySelectorAll('button');


for(let i = 0; i < card.length; i++ ){
btn[i].addEventListener('click', activate);
// btnSecondary.addEventListener('click', activate);
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

