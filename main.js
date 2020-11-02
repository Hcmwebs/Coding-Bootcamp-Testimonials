const container = document.querySelector('.container');
const card = document.querySelectorAll('.card');
const cardOne = document.getElementById('cardOne');
const cardTwo = document.getElementById('cardTwo');
const btnPrimary= document.getElementById('btnPrimary');
const btnSecondary= document.getElementById('btnSecondary');
let active = false;

btnPrimary.addEventListener('click', activate);
btnSecondary.addEventListener('click', reactivate);


function activate(){
    cardOne.style.transform ='translateX(-2000px)';
    cardTwo.style.transform ='translateX(0)';

}
function reactivate(){

    cardOne.style.transform ='translateX(0px)';
    cardTwo.style.transform ='translateX(2000px)';

}




