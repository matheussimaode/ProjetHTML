function init(){
  //variables
  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var soma = document.getElementById('soma');
  var subtração = document.getElementById('subitração');
  var multiplicação = document.getElementById('multiplicação');
  var divisão = document.getElementById('divisão');
  var igual = document.getElementById('igual');
  var um = document.getElementById('um');
  var dois = document.getElementById('dois');
  var três = document.getElementById('três');
  var cuatro = document.getElementById('quatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var sete = document.getElementById('sete');
  var oito = document.getElementById('oito');
  var nove = document.getElementById('nove');
  var zero = document.getElementById('zero');
}

//Eventos de click
  um.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
  }
  dois.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
  três.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
  quatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
  }
  sete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
  }
  oito.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
  }
  nove.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
  }
  zero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
  }
  reset.onclick = function(e){
      resetear();
  }
  soma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  subitração.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicação.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  divisão.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
  }
  
  function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}