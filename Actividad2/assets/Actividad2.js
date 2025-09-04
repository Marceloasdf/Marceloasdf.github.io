
function getData(form){
    console.log(form)
    var formData = new FormData(form);

    //para imprimirlo en consola:
    console.log(Object.fromEntries(formData));
 

}

var contraseña=""
var contraseñaConfirmada=""
function checkPasswd(){

    let user_Data=Object.fromEntries(formData);
    console.log(user_Data)
    contraseña=user_Data["Contraseña"]
    contraseñaConfirmada=user_Data["ConfirmarContraseña"]
    
    if (contraseña==contraseñaConfirmada) {
        return true
    } else {
        return false
    }

}
function addform(){
    msg="<p>Hola</p>"
    document.getElementById("Formulario3").innerHTML+=msg;
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
function Bootstrap_Form() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (form.checkValidity()) { console.log("aaa")
                event.preventDefault()
                event.stopPropagation()
            }else{

                event.preventDefault()
                getData(event.target)
            }

            form.classList.add('was-validated')
        }, false)
    })
}

Bootstrap_Form()



document.getElementById("Formulario").addEventListener("submit",function(e){
    e.preventDefault();
    addform(e.target);
})


