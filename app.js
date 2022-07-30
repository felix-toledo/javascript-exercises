// Sistema para alumnos y profesores.

// Al ser alumnos vas a poder ver tus notas y promedio final, al ser profesor vas a poder agregar las notas.

// Cada uno tendrá su usuario y contraseña.

// Si bien no es un login, es lo que puedo hacer con los conocimientos que tengo hasta ahora.

//******** TENER EN CUENTA  */
    // El alumno debe crear una cuenta para que el profesor pueda cargar las notas.
    // El nombre del alumno cuando el profesor quiere poner la nota debe ser igual a el nombre que puso el alumno cuando se registró para que el sistema lo encuentre.
    // Cada vez que la página se recarga, se pierden todos los usuarios y los datos.

    
//Creación de la clase para crear todas las cuentas.
class cuentaSistema{
    constructor(nombre, perfil, usuario, contrasena, notasAlumno, promedio){
        this.nombre = nombre;
        this.perfil = perfil;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.notas = notasAlumno;
        this.promedio = promedio;
    }
}

//Creación del array que va a contener todas las cuentas, creando una cuenta para poder probar el sistema sin tener que estar creando todo el tiempo.
let cuenta= [new cuentaSistema("Felix Toledo", "1", "ftoledo", "12345", [], 0), 
            new cuentaSistema("Juan Perez", "2", "jperez", "1234", [], 0)];
let notas;
let sumaNotas = 0;
let promedio;
let encontrarUsuario;

//Funcion para logearse
function menuPrincipal(){
    let rptaLogin = parseInt(prompt("Ingrese una opcion: 1- Crear Usuario // 2- Ingresar con usuario 3-Salir"));
    switch (rptaLogin){
        case 1:
            createUser();
            break;
        case 2:
            login();
            break;
        case 3:
            alert("Gracias por utilizar el sistema!");
            console.log()
            break;
        default:
            alert("Debe dar una respuesta válida");
            menuPrincipal();
            break;
    }
}


//Crea un usuario agregando este al array de cuenta.
function createUser(){
    let rptaNombre = prompt("Ingrese su nombre");
    let rptaPerfil = prompt("Ud. es profesor o alumno? 1- Profesor 2- Alumno");
    let rptaUsuario = prompt("Ingrese el nombre de usuario que desea");
    let rptaContrasena = prompt("Ingrese la contraseña deseada");
    if (chequeoUsuario(rptaUsuario) == false){
                cuenta.push(new cuentaSistema(rptaNombre, rptaPerfil, rptaUsuario, rptaContrasena, [], 0));
                alert("Hola! " +rptaNombre + " // Perfil:" +respuestaDelPerfil(rptaPerfil) + " // Usuario:" +rptaUsuario + " // Contraseña:" +rptaContrasena);
                menuPrincipal();
    } else {
        alert("Ya hay un usuario con el idUsuario: " +rptaUsuario);
        createUser()
    }
}

//Funcion que devuelve que perfil sos para que te avise.
function respuestaDelPerfil(unoODos){
    switch (unoODos){
        case "1":
            return "Profesor"; 
            break;
        case "2": 
            return "Alumno";
            break;
    }
}

//Esta funcion retorna TRUE o FALSE para saber si esa cuenta existe o no.
function chequeoUsuario(nombreUsuario){
    return cuenta.some((usuario) => usuario.usuario == nombreUsuario);
}

//Funcion Login
function login(){
    let rptaLogin = prompt("Ingrese su usuario");
    if (chequeoUsuario(rptaLogin)){
        encontrarUsuario = cuenta.find((user)=> user.usuario === rptaLogin);
        let contrasena = prompt("Ingrese su contraseña");
            if (contrasena == encontrarUsuario.contrasena){
                switch (encontrarUsuario.perfil){
                    case "1":
                        ingresarNotas();
                        break;
                    case "2": 
                        leerPromedio();
                        break;
                }
            } else {
                alert("Contraseña Erronea");
                !chequeoUsuario;
                menuPrincipal();
            }
    } else {
        alert("No hay un usuario con el idUsuario: " +rptaLogin)
        menuPrincipal();
    }
}

//Funcion para que el profesor ingrese las notas
function ingresarNotas(){
    let rptaNotas = prompt("Ingrese nombre del alumno al que desea agregar las notas");
    encontrarUsuario = cuenta.find((user)=> user.nombre === rptaNotas);
    if (rptaNotas == encontrarUsuario.nombre){
        alert("Ud. eligió a: " +encontrarUsuario.nombre);
        let contador = parseInt(prompt("Cuantas notas desea ingresar?"));
        for (let i = 0; i<contador; i++){
            notas = parseInt(prompt("Ingrese la " +(i+1) +" nota"));
            encontrarUsuario.notas.push(notas);
            sumaNotas = sumaNotas + notas;
            console.log(sumaNotas);
        }
        promedio = sumaNotas / contador;
        alert("El promedio del alumno es: " +promedio);
        encontrarUsuario.promedio = promedio;
        sumaNotas = 0;
    } else {
        alert("Para que " +rptaNotas +" pueda recibir notas, primero debe crearse un usuario.")
    }
    menuPrincipal();
}

//Funcion para que el alumno pueda leer sus promedios
function leerPromedio(){
    if (encontrarUsuario.promedio > 0){
        alert("Sus notas fueron" + encontrarUsuario.notas);
        alert ("Su promedio es: " +encontrarUsuario.promedio);
        menuPrincipal();
    } else {
        alert ("El profesor aún no cargó su promedio");
        menuPrincipal();
    }
}

//Empieza el programa
menuPrincipal();