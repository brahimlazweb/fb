var input = document.getElementById('coment-value');
var send = document.getElementById('send-cmnt');
var cmntt = document.getElementById('list-Cmntr-1');

send.addEventListener('click', sendCmnt);
function sendCmnt(e){
  e.preventDefault();
  var li = document.createElement('li');
  li.className = 'list-cmntr-2';
  li.appendChild(document.getElementById('coment-value').value);
  cmntt.appendChild(li);

};