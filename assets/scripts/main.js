


guardarLocalStorage()

const personas = []

function guardarLocalStorage() {
    document.getElementById("formulario").addEventListener("click", function (event) {
        event.preventDefault()
    });
    boton = document.getElementById('boton-enviar')
    boton.addEventListener('click', () => {
        nombreCompleto = document.getElementById('nombre').value
        fechaE = document.getElementById('fecha').value
        emailE = document.getElementById('email').value
        contraseñaE = document.getElementById('contraseña').value
        confirmacionE = document.getElementById('conf-contraseña').value
        generoE = document.getElementById('genero').value
        paisE = document.getElementById('pais').value
        function calcularEdad(fecha_nacimiento) {
            var hoy = new Date();
            var cumpleanos = new Date(fecha_nacimiento);
            var edad = hoy.getFullYear() - cumpleanos.getFullYear();
            var m = hoy.getMonth() - cumpleanos.getMonth();
            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--;
            }
            return edad;
        }

        function mayorEdad(fecha) {
            var edad = calcularEdad(fecha);
            if (edad >= 18) {
                return true
            } else {
                alert("Eres menor de edad.");
            }
        }
        function camposLlenos() {
            if (nombreCompleto.length > 0 && emailE.length > 0 && generoE.length > 0 && paisE.length > 0) {
                return true
            } else {
                return false
            }
        }


        function confirmarContraseña(contraseña, confirmacion) {
            if (contraseña === confirmacion) {
                return true
            } else {
                alert("Las contraseñas no coinciden")
            }
        }
        if(confirmarContraseña(contraseñaE, confirmacionE) && mayorEdad(fechaE) && camposLlenos() ){
            let persona = {
                nombre: nombreCompleto,
                fecha: fechaE,
                email: emailE,
                contraseña: contraseñaE,
                genero: generoE,
                pais: paisE
            }
            const p = obtenerLocalStorage()

            if(p == null) {
                console.log("Estoy en null")
                personas.push(persona)
                localStorage.setItem('personas', JSON.stringify(personas))
            }else{
                console.log("Llego hasta aqui")
                p.push(persona)
                localStorage.setItem('personas', JSON.stringify(p))
            }
            alert("Registro exitoso.")
        }
    })
}




