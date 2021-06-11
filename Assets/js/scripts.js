/*preguntas y respuestas*/
var medellin = document.getElementById('medellin');
var bogota = document.getElementById('bogota');
var cali = document.getElementById('cali');

var preguntaUno = document.getElementById('uno');
var preguntaDos = document.getElementById('dos');
var preguntaTres = document.getElementById('tres');

var buenosaires = document.getElementById('buenosaires');
var laplata = document.getElementById('laplata');
var laboca = document.getElementById('laboca');

var riodejaneiro = document.getElementById('riodejaneiro');
var saopablo = document.getElementById('saopablo');
var brasilia = document.getElementById('brasilia');

var correcto = document.getElementById('correcto');
var incorrecto = document.getElementById('incorrecto');
var correcto2 = document.getElementById('correcto2');
var incorrecto2 = document.getElementById('incorrecto2');

var puntaje = 0;

medellin.addEventListener("click", function(e){
    e.preventDefault();
    medellin.style.background = "red";
    incorrecto.style.display = "block";
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})

bogota.addEventListener("click", function(e){
    e.preventDefault();
    bogota.style.background = "green";
    correcto.style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000)
})

cali.addEventListener("click", function(e){
    e.preventDefault();
    cali.style.background = "red";
    incorrecto.style.display = "block";
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})

buenosaires.addEventListener("click", function(e){
    e.preventDefault();
    buenosaires.style.background = "green";
    correcto2.style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaDos.style.display = "none";
        preguntaTres.style.display = "block";
    }, 1000);    
})

laplata.addEventListener("click", function(e){
    e.preventDefault();
    laplata.style.background = "red";
    incorrecto2.style.display = "block";
    setTimeout(function(){
        preguntaDos.style.display = "none";
        preguntaTres.style.display = "block";
    }, 1000);
})

laboca.addEventListener("click", function(e){
    e.preventDefault();
    laboca.style.background = "red";
    incorrecto2.style.display = "block";
    setTimeout(function(){
        preguntaDos.style.display = "none";
        preguntaTres.style.display = "block";
    }, 1000);
})

riodejaneiro.addEventListener("click", function(e){
    e.preventDefault();
    riodejaneiro.style.background = "red";
    incorrecto2.style.display = "block";
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>');
    }, 1000)
})

saopablo.addEventListener("click", function(e){
    e.preventDefault();
    saopablo.style.background = "red";
    incorrecto2.style.display = "block";
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>');
    }, 1000)
})

brasilia.addEventListener("click", function(e){
    e.preventDefault();
    brasilia.style.background = "green";
    correcto2.style.display = "block";
    puntaje++;
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>');
    }, 1000)
})



