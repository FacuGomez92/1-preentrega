let mail="nombre@gmail.com"
let pass="1234";

function login(){
    let ingresar = false;

  for (let i = 2; i >= 0; i--){
    let usermail=prompt("ingresa tu Mail");
    if (usermail == mail){
        alert("Ingresa tu Contraseña:");{
        let password=prompt("ingresa tu Contraseña");
        if (password == pass);
            {alert("Bienvenido a Estación Fit")}
        ingresar = true;
        break;
        }
    } 
     else{
        alert("Error te quedan " + i + " chances");
    }
  }
  return ingresar;
}
console.log(login());

let correcto= login();
if(correcto){
let menu = prompt(
    "Elegí una opción: \n1- Reservá tu lugar. \n2 - Cancelar turno. \n3 - Abonar cuota. \nPresioná Exit para finalizar."
  );


  while (menu != "Exit" && menu != "exit") {
    switch (menu) {
      case "1":
        alert("Reserva tu dia y horario ");
        break;
      case "2":
        let canTurno = prompt("Cancelar turno?");
        if (canTurno = "si") {
          alert("Cancelaste dia X");}
        break;
      case "3":
        let deposito = parseInt(prompt("Abonar mes X"));
        alert("Abonaste mes X" );
        break;
      default:
        alert("opcion no valida");
        break;
    }
    menu= prompt("Elegí una opción: \n1- Reservá tu lugar. \n2 - Cancelar turno. \n3 - Abonar cuota. \nPresioná Exit para finalizar.");
}
}

alert("Gracias por elegir Estación Fit")



