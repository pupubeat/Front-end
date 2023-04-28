//obtener elementos de la api
var url = "https://digimon-api.vercel.app/api/digimon"
var contenido = document.getElementById("contenido")
var digimonsearch = document.getElementById("campo")

//consumir api con fetch
fetch(url)
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        showtable(datos)
    }).catch(error => console.log(error))

//funcion para obtener datos
function showtable(datos) {
    //Limpiar el elemento html
    contenido.innerHTML = ""
    //Recorrer la informacion
    for (item of datos) {
        //Insertamos los valores en la tabla
        contenido.innerHTML += `
           <tr>
            <td>${item.name}</td>
            <td>${item.level}</td>
            <td><img src="${item.img}" height ="200px" alt="${item.name}" class="zoom"></td>
           </tr>    
        `}

}