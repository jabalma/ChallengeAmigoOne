// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
const resultado = document.getElementById('resultado');
const agregar = document.querySelector('.button-add');
const elegir = document.querySelector('.button-draw');
const nombre = document.querySelector('.input-name');

function agregarAmigo() {
    let amigo = nombre.value;
    if (amigo == null || amigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        let amigoExiste = false;

        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === amigo) {
                amigoExiste = true;
                break;
            }
        }

        if (amigoExiste) {
            alert("Este amigo ya está en la lista.");
        } else {
            amigos.push(amigo);
            nombre.value = "";
            const liNombre = document.createElement('li');
            liNombre.textContent = amigo;
            document.getElementById('listaAmigos').appendChild(liNombre);
        }
    }
}
