var mensaje="jarvis llama ala crus roja";
document.writeln("<h3>"+mensaje+"</h3>")
var tiempo= Date.now();
document.writeln("<p>"+tiempo+"</p>")

//transformar lo que venga del formulario en formato de llave:valor
function getData(form){
    var formData = new FormData(form);

    for (var pair of formData.entries()){
        console.log(pair[0]+ ":"+ pair[1]);
    }
    //para imprimirlo en consola:
    console.log(Object.fromEntries(formData));
    console.log(JSON.stringify(Object.fromEntries(formData),null,4))

    //borrar mensaje previo si existe
    if (document.getElementById("msgExito")!=null) {
        document.getElementById("msgExito").innerHTML="";
    }
    
    if (document.getElementById("msgEdad")!=null) {
        document.getElementById("msgEdad").innerHTML="";
    }


    edad=pair[1]
    if(edad<=0){
        mensaje="<p id='msgEdad'>ingrese una edad mayor a 0 </p>"
    }
    else if (edad<18) {
        mensaje="<p id='msgEdad'>usted es menor de edad</p>"
    }
    else if(edad>=18){
        mensaje="<p id='msgEdad'>usted es mayor de edad</p>"
    }
    else
        mensaje="<p id='msgEdad'>Porfavor ingrese un valor correcto (numero entero, no menor a 0)</p>"

    document.getElementById("myForm").innerHTML+=mensaje;

    msg="<p id='msgExito'>Formulario enviado con exito!</p>";
    //innerhtml es para "darle" lo de codigo (lo que sea que este dentro del div "myForm") al getElementById, 
    // y que sea igual a si mismo mas el mensaje 
    document.getElementById("myForm").innerHTML+=msg;

}



//para capturar los datos del formulario "MyForm" cuando se presione el "submit" 
document.getElementById("myForm").addEventListener("submit",function(e){
    e.preventDefault();
    getData(e.target);
})