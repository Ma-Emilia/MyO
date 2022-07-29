function validacion(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var benvio = document.getElementById("boton1");
    var bconfirmar = document.getElementById("boton2");
    if(nombre == "" || email == "" || asunto == ""){
        alert("Por favor, completa todos los campos señalados con asterisco");
        return false;
    } 
    else{
        benvio.style.cssText = 'display: none';
        bconfirmar.style.cssText= 'display: block';
    }
    
}

const $form = document.querySelector('#form')
$form.addEventListener ('submit', handleSubmit)
var benvio = document.getElementById("boton1");
var bconfirmar = document.getElementById("boton2");

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('¡GRACIAS POR CONTACTARNOS! Te contestaremos pronto :) MyO')
        benvio.style.cssText = 'display: block';
        bconfirmar.style.cssText= 'display: none';
    }
}