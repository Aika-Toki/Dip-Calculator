function copy(){
  let text = document.querySelector("#cssCode").value;
  document.querySelector('#cssCode').focus();
  document.querySelector('#cssCode').select();
  navigator.clipboard.writeText(text);
  alert('Copy Success');
}
function changeValue(){
  let value = Number(document.querySelector('#dip').value);
  let target = document.querySelector('#tar').value;
  let result = [];
  result.push(Math.round(value*0.75),Math.round(value*1),Math.round(value*1.5),Math.round(value*2),Math.round(value*3));
  document.querySelector('#resultL').textContent = `${result[0]}px`;
  document.querySelector('#resultM').textContent = `${result[1]}px`;
  document.querySelector('#resultH').textContent = `${result[2]}px`;
  document.querySelector('#resultX').textContent = `${result[3]}px`;
  document.querySelector('#resultXX').textContent = `${result[4]}px`;
  document.querySelector('#cssCode').value = `@media screen and (-webkit-min-device-pixel-ratio: 2.0) {\n${target}: ${result[4]}px;\n}\n@media screen and (-webkit-max-device-pixel-ratio: 2.0) {\n${target}: ${result[3]}px;\n}\n@media screen and (-webkit-max-device-pixel-ratio: 1.5) {\n${target}: ${result[2]}px;\n}\n@media screen and (-webkit-max-device-pixel-ratio: 1.0) {\n${target}: ${result[1]}px;\n}\n@media screen and (-webkit-max-device-pixel-ratio: 0.75) {\n${target}: ${result[0]}px;\n}`;
}