var  btnVolver = document.getElementById("volver");
var  canvas = document.getElementById("ahorcado");
var pincel=canvas.getContext('2d');
var btnJugar = document.getElementById("inicio-juego");
var btncaptura = document.getElementById("agregar-palabra");
var x=600;
var y=500;
var funciona=false;
var errores=2;
var palabras_array=['LISTA','COLEMENA','CORAZON','BUBULUBU','BICICLETA','MUCHACHA','SOMBRA','SUBURBAN','POPOTE','CASA','BURRO']
let palabraAleatoria='';
document.getElementById("volver").style.display='none';
document.getElementById("juego").style.display='none';
document.getElementById('volver').style.display='none';

btnJugar.focus();


btnVolver.addEventListener("click",function(){
    location.reload();
});

btnJugar.addEventListener("click",function (event){
event.preventDefault();
document.getElementById("pantalla-inicio").style.display='none';
document.getElementById("juego").style.display='initial';
ingreso.focus();
cargarTableroJuego();
var indice = Math.round(Math.random()*palabras_array.length);
palabraAleatoria=palabras_array[indice];
dibujarBase();

function cargarTableroJuego(){
    pincel.fillStyle='lightyellow';
    pincel.fillRect(0,0,1500,550);
}
function dibujarBase(){
    horca(0);
} 

function dibujarLineas(){
    pincel.moveTo(x,y);
    pincel.lineTo(x+50,y);
    pincel.stroke();
}

pincel.font = 'bold 30px verdana';
for(i=0;i < palabraAleatoria.length; i++){
dibujarLineas(x,y);
x+=100;
}
ahorcado();
});






btncaptura.addEventListener('click',function(event){
    event.preventDefault();
    var palabraNw=palabra.value;
    var palabraEx=0;
    var palabraNo=0;
    for(var i=0;i<palabras_array.length;i++){
        if (palabraNw==palabras_array[i]){
            palabraEx+=1;
        }
        if (palabraNw!=palabras_array[i]){
            palabraNo+=1;
            
        }
       
    }
    if (palabraNo>0){
        palabras_array.push(palabraNw);
        
    }
    if (palabraEx>0){
        alert('Ya esta en el diccionario!');
    }
    document.getElementById("palabra").value="";
    palabra.focus();
});

