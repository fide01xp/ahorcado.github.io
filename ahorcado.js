btncap=document.getElementById('captura');
function checarLetras(){
    var key =event.keyCode || event.which;
    var teclado=String.fromCharCode(key);
    var patron="ABCDFGHIJKLMNÑOPQRSTUVWXYZ"
  
        if (patron.indexOf(teclado)==-1){
            return false; 
        }
}

function ahorcado(){


var letraNoEncontrada = 0;
var letraEncontrada = 0;
var xLetra = 600;
var letrasArreglo = [];
ingreso=document.getElementById('ingreso');
document.addEventListener('keydown',function(event){
  event.preventDefault();
  var letra = event.key;
   var letraExiste = 0;
   var letraNoExiste = 0;
   console.log(letra);
  if(letrasArreglo.length<1){
    letrasArreglo.push(letra);
    pincel.fillStyle="black";
    pincel.fillText(letra,xLetra,170);
    var x = 600;
   var y = 500;
   var errores = 0;
   for(var i = 0; i < palabraAleatoria.length; i++){
      if(letra == palabraAleatoria[i]){
        pincel.fillStyle="black";
        pincel.fillText(palabraAleatoria[i],x,y-5);
        letraEncontrada += 1;
      }
      else{
         errores += 1;
      }
      x += 100; 
   }
   if(errores == palabraAleatoria.length){
     letraNoEncontrada += 1;
     switch(letraNoEncontrada){
      case 1:horca(letraNoEncontrada);break;
      case 2:horca(letraNoEncontrada-1);break;
      case 3:horca(letraNoEncontrada-1);break;
      case 4:horca(letraNoEncontrada-2);break;
      case 5:horca(letraNoEncontrada-2);break;
      case 6:horca(letraNoEncontrada-3);break
      case 7:horca(letraNoEncontrada-3);break;
      case 8:horca(letraNoEncontrada-4);break;
      case 9:horca(letraNoEncontrada-4);break;    
     }
   }
   xLetra += 30;
   
   if(letraEncontrada == palabraAleatoria.length){
         ganaste();
   }else{
     if(letraNoEncontrada == 9){
        perdiste();
     }
   }
   }
   else{
       for(var i=0;i < letrasArreglo.length;i++){
          if (letra == letrasArreglo[i]){
              letraExiste += 1;
          }else{
              letraNoExiste += 1;
          }
        }
        if(letraExiste>0){
          alert(letra+" ya está ingresada");
          document.getElementById("ingreso").value="";
          ingreso.focus();
        }
        if (letraNoExiste==letrasArreglo.length){
             letrasArreglo.push(letra);
             pincel.fillStyle="black";
             pincel.fillText(letra,xLetra,170);
             var x = 600;
   var y = 500;
   var errores = 0;
   for(var i = 0; i < palabraAleatoria.length; i++){
      if(letra == palabraAleatoria[i]){
        pincel.fillStyle="black";
        pincel.fillText(palabraAleatoria[i],x,y-5);
        letraEncontrada += 1;
      }
      else{
         errores += 1;
      }
      x += 100; 
   }
   if(errores == palabraAleatoria.length){
     letraNoEncontrada += 1;
     switch(letraNoEncontrada){
       case 1:horca(letraNoEncontrada);break;
       case 2:horca(letraNoEncontrada-1);break;
       case 3:horca(letraNoEncontrada-1);break;
       case 4:horca(letraNoEncontrada-2);break;
       case 5:horca(letraNoEncontrada-2);break;
       case 6:horca(letraNoEncontrada-3);break
       case 7:horca(letraNoEncontrada-3);break;
       case 8:horca(letraNoEncontrada-4);break;
       case 9:horca(letraNoEncontrada-4);break;    
     }
   }
   xLetra += 30;
   document.getElementById("ingreso").value="";
   ingreso.focus();
   if(letraEncontrada == palabraAleatoria.length){
    ganaste();
   }else{
     if(letraNoEncontrada == 9){
      perdiste(); 
     }
   } 
        }
    }

});

}

function perdiste(){
  pincel.fillStyle="red";
  pincel.fillText("PERDISTE!!!",600,100);
  document.getElementById("juego").style.display="none";
  document.getElementById("volver").style.display="block";
  alert("PERDISTE,la palabra era: "+palabraAleatoria); 
  btnJugar.removeEventListener('click',function(){});
  document.addEventListener('keydown',function(){
    location.reload();
  });
}
function ganaste(){
  pincel.fillStyle="green";
  pincel.fillText("GANASTE!!!",600,100);
  document.getElementById("juego").style.display="none";
  document.getElementById("volver").style.display="block";
  document.addEventListener('keydown',function(){
    location.reload();
  });
}

function horca(errores){
  var imagen = new Image();
  imagen.src = "imagenes/ahorcado"+errores+".png";
  imagen.onload = function(){
      pincel.drawImage(imagen, 20, 0, 300, 500);
  }
  /*************************************************
  // Imagen 2 mas pequeña a un lado de la horca //       
  var imagen = new Image();
  imagen.src = "imagenes/ahorcado"+errores+".png";
  imagen.onload = function(){
      ctx.drawImage(imagen, 620, 0, 100, 100);
  }
  *************************************************/
}