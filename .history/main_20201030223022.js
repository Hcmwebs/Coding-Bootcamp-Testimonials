const container = document.querySelector('.container');
const active = false;
const btnPrimary = document.getElementById('btnPrimary');
const btnSecondary = document.getElementById('btnSecondary')
btnPrimary.addEventListener('click', activate);
btnSecondary.addEventListener('click', activate);


function activate(){
  console.log('active');
}

