
function getData(form){
    console.log(form)
    var formData = new FormData(form);

    //para imprimirlo en consola:
    console.log(Object.fromEntries(formData));
 

}

function checkPasswd() {
    const contraseña = document.getElementById("Contraseña").value;
    const contraseñaConfirmada = document.getElementById("ConfirmarContraseña").value;
    return contraseña === contraseñaConfirmada;
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
            if (!form.checkValidity()) { 
                event.preventDefault()
                event.stopPropagation()
            }else{
                event.preventDefault()
                if (checkPasswd()) {
                    console.log("Las contraseñas coinciden");
                    getData(event.target)
                } else {
                    console.log("Las contraseñas no coinciden");
                }
                
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


