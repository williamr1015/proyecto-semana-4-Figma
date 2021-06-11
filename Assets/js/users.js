
/**usuario y contraseña */
//crea una aplicacion para ver los alumnos y sus notas//
//1 Crear un array de Usuarios y contraseñas //
var usuarios = [
    {
        usuarioNombre: 'Dani',
        contraseña: '123456',
    },
    {
        usuarioNombre: 'Pipe',
        contraseña: 'abc',
    },
    {
        usuarioNombre: 'Willy',
        contraseña: '2610'
    },
    {
        usuarioNombre: 'Sami',
        contraseña: '0110'
    },
    {
        usuarioNombre: 'Dylan',
        contraseña: '2712'
    }
] 
// crea un array con las notas de los alumnos
   var notas = [
       {
           nombre: 'Dani',
           nota: 10
       },
       {
           nombre: 'Pipe',
           nota: 8
       },
       {
           nombre: 'Willy',
          nota: 9
       },
       {
           nombre: 'Sami',
           nota: 9.5
       },
       {
           nombre: 'Dylan',
           nota: 8.5
       }
   ]
//  //3 crear funcion para iniciar secion y dar las notas//
 var usuarioPrompt = prompt("ingrese su ususario");
 var contraseñaPrompt = prompt("ingresa tu contraseña");
 function usuarioValid(User, Pass) {
     for (var i = 0; i<usuarios.length; i++){
       if (User=== usuarios[0].usuarioNombre && Pass === usuarios[0].contraseña){
         return true;
         }else if (User=== usuarios[1].usuarioNombre && Pass === usuarios[1].contraseña){
           return true;
         }else if (User=== usuarios[2].usuarioNombre && Pass === usuarios[2].contraseña){
           return true;
         } else if (User=== usuarios[3].usuarioNombre && Pass === usuarios[3].contraseña){
               return true;
         }else if (User=== usuarios[4].usuarioNombre && Pass === usuarios[4].contraseña){
           return true;
     }return false;
 }
}
 function IniciarSecion(User, Pass) {
   for (var i= 0;  i< usuarios.length; i++) {
     if(usuarioValid(User, Pass)){
     console.log(notas);
   }else{ alert ("Upss, usuario o contraseña invalido");
}
}
}


IniciarSecion(usuarioPrompt, contraseñaPrompt);

var lista = ["Dani","Pipe","Willy","Sami","Dylan"];

/**hola mundo */

console.log("Hola Mundo");

/**listas de arrays */
for (var i =0; i< lista.length;  i++) {
    console.log(lista[i]);    
}
var contador = 0;
while (contador < 10) {
 console.log(contador);
 contador++;    
}
var contador = 10
 do {
     console.log(contador);
     contador--;
 } while (contador>0); 