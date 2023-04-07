obtenerLocalStorage()
function obtenerLocalStorage(){
    const lista = JSON.parse(localStorage.getItem('personas'));

    return lista
}
imprimitDatos()
function imprimitDatos(){
    const p = obtenerLocalStorage()
    if(p == null){

    }else{
        p.map((e) =>{
            const tabla = document.getElementById("tabla")
            tabla.innerHTML += `
                <tr>
                    <td>${e.nombre}</td>
                    <td>${e.email}</td>
                </tr>`
        })
    }

}

