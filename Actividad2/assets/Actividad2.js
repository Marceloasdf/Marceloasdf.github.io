
//confirmar contraseña

var contraseña1=null
var contraseñaConfirmada=null
function getData(form){
    console.log(form)
    var formData = new FormData(form);

    //para imprimirlo en consola:
    console.log(Object.fromEntries(formData));

}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                getData(event.target)
            }

            form.classList.add('was-validated')
        }, false)
    })
})()




document.getElementById("Formulario").addEventListener("submit",function(e){
    e.preventDefault();
    getData(e.target);
})


