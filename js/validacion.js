function validacion(){
    var nombre = document.getElementById("nombre").value;
    if(nombre == ""){
        alert("Por favor, completar el Nombre.");
        return false;
    }
    var email = document.getElementById("email").value;
    if(email == ""){
        alert("Por favor, completar el E-mail.");
        return false;
    }
    var asunto = document.getElementById("asunto").value;
    if(asunto == ""){
        alert("Por favor, completar el asunto.");
        return false;
    }
  
}
