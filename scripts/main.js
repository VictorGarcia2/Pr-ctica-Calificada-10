
let temp = document.querySelector('#template')


const url = 'https://jsonplaceholder.typicode.com/users';
async function users() {
    temp.innerHTML = ""
    try {
        const response = await fetch(url);
        const result = await response.json();
        fetchUsers(result)
    } catch (error) {
        temp.innerHTML = "Error al cargar los usuarios. Inténtalo de nuevo más tarde."
    }
}


function fetchUsers(data){
 
   data.forEach(element => {
    let template = `<div class="col">
              <div class="card h-100">
                <div class="card-body">
                    <h1 class="card-title fs-3"><strong>Nombre: </strong>${element.name}</h1>
                    <h2 class="card-title fs-3"><strong>Nombre de usuario: </strong>${element.username}</h2>
                    <h3 class="card-title fs-3"><strong>Correo electronico: </strong> ${element.email}</h3>
                    <h4 class="card-title fs-3"><strong>Empresa: </strong>${element.company.name}</h4>
                </div>
              </div>
            </div>`
                  temp.innerHTML += template
   });
}
users()



