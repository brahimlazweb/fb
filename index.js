var down = document.getElementById('down');
var list = document.getElementById('settingss');

down.addEventListener('click', dropDown);
function dropDown(e){
  e.preventDefault();
  list.style.display = 'block';
  document.getElementById('container-1').style.zIndex = '1';

};

down.addEventListener('dblclick', hideMenu);
function hideMenu(e){
  e.preventDefault();
  list.style.display = 'none';
  document.getElementById('container-1').style.zIndex = '2';
  
};




var input = document.getElementById('coment-value');
var send = document.getElementById('send-cmnt');
var cmntt = document.getElementById('list-Cmntr-1');

send.addEventListener('click', sendCmnt);
function sendCmnt(e){
  e.preventDefault();
  var li = document.createElement('li');
  li.className = 'tajouba';
  li.appendChild(document.createTextNode(input.value));
  var btn = document.createElement('button');
  btn.className = 'deltBtn';
  btn.innerHTML = 'X';
  li.appendChild(btn);
  cmntt.appendChild(li);
  input.value = '';
  
  
};

cmntt.addEventListener('click', deletB);
function deletB(e){
e.preventDefault();
if(e.target.className = 'deltBtn'){
  e.target.parentElement.remove();
};

};


var likee = document.getElementById('like');
likee.addEventListener('click', clik);
function clik(e){
  e.preventDefault();
  document.getElementById('reaction').style.display = 'block';
};




document.getElementById('love').addEventListener('click', lov);
function lov(e){
  e.preventDefault();
  
  document.getElementById('like').className = 'fas fa-heart';
  document.getElementById('like').style.color = 'red';
  document.getElementById('reaction').style.display = 'none'
  
};
document.getElementById('like-1').addEventListener('click', likk);
function likk(e){
  e.preventDefault();
  
  document.getElementById('like').className = 'fas fa-thumbs-up';
  document.getElementById('like').style.color = 'rgb(0, 153, 255)';
  document.getElementById('reaction').style.display = 'none'
};
document.getElementById('care').addEventListener('click', car);
function car(e){
  e.preventDefault();
  
  document.getElementById('like').className = 'fas fa-kiss-beam';
  document.getElementById('like').style.color = 'yellow';
  document.getElementById('reaction').style.display = 'none'
};
document.getElementById('laught').addEventListener('click', lo);
function lo(e){
  e.preventDefault();
  
  document.getElementById('like').className = 'fas fa-grin-squint';
  document.getElementById('like').style.color = 'yellow';
  document.getElementById('reaction').style.display = 'none'
};
document.getElementById('angry').addEventListener('click', ang);
function ang(e){
  e.preventDefault();
  
  document.getElementById('like').className = 'fas fa-angry';
  document.getElementById('like').style.color = 'rgb(180, 48, 0)';
  document.getElementById('reaction').style.display = 'none'
};


