//Definición de variables
var mostrar = document.querySelector("#mostrar");
var datos = document.querySelector("#contenido");


//Consumo de datos desde archivo JASON

mostrar.addEventListener('click', () => {
    fetch('datos.JSON')

        .then(Response => Response.json())

        .then(data => {
            datos.innerHTML=""

            for (let index of data) {

                datos.innerHTML+=`
                <tr>
                    <th scope="row">${index.id}</th>
                    <td>${index.nombre}</td>
                    <td>${index.apellido}</td>
                    <td>${index.email}</td>
                </tr>`

            }

        })
            
})
