

var advice_id = document.querySelector('.id');
var url = 'https://api.adviceslip.com/advice';
var reloadButton = document.getElementById('reloadButton');
let text = document.querySelector('.text');

async function getAdvice(){
    const response = await fetch(url);
    const {slip : { id , advice }} = await response.json();

    advice_id.textContent = id;
    text.textContent = advice;
    console.log(advice);
}
getAdvice();
reloadButton.onclick = ()=>{
  getAdvice();
}