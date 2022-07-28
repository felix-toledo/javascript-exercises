// Sistema para alumnos y profesores.

// Al ser alumnos vas a poder ver tu promedio final, al ser profesor vas a poder agregar la nota.

// Cada uno tendrá su usuario y contraseña.

// Si bien no es un login, es lo que puedo hacer con los conocimientos que tengo hasta ahora.



//Creación del perfil profesor.
class perfilProfesor{
    constructor(nombre, usuario, contrasena){
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

}

//Creación del perfil alumno.
class perfilAlumno{
    constructor(nombre, usuario, contrasena, promedio){
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.promedio = promedio;
    }
}

//Creación del array que va a contener todas las cuentas, creando una cuenta para poder probar el sistema sin tener que estar creando todo el tiempo.
let cuentaProfesor = [new perfilProfesor("Felix Toledo", "ftoledo", "1234")];
let cuentaAlumno = [new perfilAlumno("Juan Perez", "jperez", "12345")];
let notas;
let sumaNotas = 0;
let promedioo;
let encontrarUsuario2;

//Funcion para logearse
function menuPrincipal(){
    let rptaLogin = parseInt(prompt("Ingrese una opcion: 1- Crear Usuario // 2- Ingresar con usuario 3-Salir"));
    switch (rptaLogin){
        case 1:
            crearUsuario();
            break;
        case 2:
            login();
            break;
        case 3:
            alert("Gracias por utilizar el sistema!");
            break;
        default:
            alert("Debe dar una respuesta válida");
            menuPrincipal();
            break;
    }
}

//Funcion para crear usuario
function crearUsuario(){
    let rptaCreacion = parseInt(prompt("Que rol va a cumplir? 1-Profesor // 2-Alumno"))
    switch (rptaCreacion){
        case 1:
            let rptaNombre = prompt ("Ingrese su nombre");
            let rptaUsuario = prompt ("ingrese su usuario");
            let rptaContrasena = prompt ("ingrese contraseña");
            cuentaProfesor.push(new perfilProfesor(rptaNombre, rptaUsuario, rptaContrasena));
            alert("Hola! " +rptaNombre + " // Usuario:" +rptaUsuario + " // Contraseña:" +rptaContrasena);
            menuPrincipal();
            break;
        case 2: 
            let rptaNombre2 = prompt ("Ingrese su nombre");
            let rptaUsuario2 = prompt ("ingrese su usuario");
            let rptaContrasena2 = prompt ("ingrese contraseña");
            cuentaAlumno.push(new perfilAlumno(rptaNombre2, rptaUsuario2, rptaContrasena2, 0));
            alert("Hola! " +rptaNombre2 + " // Usuario:" +rptaUsuario2 + " // Contraseña:" +rptaContrasena2);
            menuPrincipal();
            break;
        default:
            alert("Debe dar una respuesta válida");
            menuPrincipal();
            break;
    }
}

//Funcion Login
function login(){
    let rptaLogin = parseInt(prompt("Elija una opción: 1- Profesor // 2- Alumno"));
    switch(rptaLogin){
        case 1:
            let usuario = prompt("Ingrese su usuario");
            const encontrarUsuario = cuentaProfesor.find((user)=> user.usuario === usuario);
            let contrasena = prompt("Ingrese su contraseña");
            if (contrasena == encontrarUsuario.contrasena){
                ingresarNotas();
            } else {
                alert("Contraseña Erronea");
                menuPrincipal();
            }
            break;
        case 2:
            let usuario2 = prompt("Ingrese su usuario");
            encontrarUsuario2 = cuentaAlumno.find((user)=> user.usuario === usuario2);
            let contrasena2 = prompt("Ingrese su contraseña");
            if (contrasena2 == encontrarUsuario2.contrasena){
                leerPromedio();
            } else {
                alert("Contraseña Erronea");
                menuPrincipal();
            }
    }
}

//Funcion para que el profesor ingrese las notas
function ingresarNotas(){
    let rptaNotas = prompt("Ingrese nombre del alumno al que desea agregar las notas");
    const encontrarUsuario = cuentaAlumno.find((user)=> user.nombre === rptaNotas);
    if (rptaNotas == encontrarUsuario.nombre){
        alert("Ud. eligió a: " +encontrarUsuario.nombre);
        let contador = parseInt(prompt("Cuantas notas desea ingresar?"));
        for (let i = 0; i<contador; i++){
            notas = parseInt(prompt("Ingrese la " +(i+1) +" nota"))
            sumaNotas = sumaNotas + notas;
            console.log(sumaNotas);
        }
        promedioo = sumaNotas / contador;
        alert("El promedio del alumno es: " +promedioo)
        encontrarUsuario.promedio = promedioo;
        sumaNotas = 0;
    } else {
        alert("Para que " +rptaNotas +" pueda recibir notas, primero debe crearse un usuario.")
    }
    menuPrincipal();
}

//Funcion para que el alumno pueda leer sus promedios
function leerPromedio(){
    if (encontrarUsuario2.promedio > 0){
        alert ("Su promedio es: " +encontrarUsuario2.promedio);
        menuPrincipal();
    } else {
        alert ("El profesor aún no cargó su promedio");
        menuPrincipal();
    }
}


//Empieza el programa
menuPrincipal();