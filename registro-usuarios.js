export default function registroUsuarios() {

  const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputEdad = document.getElementById("input-edad");
const items = document.getElementById("items");
const fragmento = document.createDocumentFragment();
const template = document.getElementById("template").content;
const form = document.querySelector("form");
let persona = {};
let usuarios = [];
let id = 0;

const mostrarDatos = (nombre, apellido, edad, id) => {
  template.getElementById("td-nombre").textContent = nombre;
  template.getElementById("td-apellido").textContent = apellido;
  template.getElementById("td-edad").textContent = edad;
  template.querySelector(".btn-editar").dataset.id = id;
  const clone = template.cloneNode(true);
  fragmento.appendChild(clone);
  items.appendChild(fragmento);
};

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    usuarios.forEach((el) => {
      mostrarDatos(el.nombre, el.apellido, el.edad, el.id);
    });
  }


form.addEventListener("submit", (e) => {
  e.preventDefault();
  registro(inputNombre.value, inputApellido.value, inputEdad.value);
  form.reset();
});


const registro = (nombre, apellido, edad) => {
  persona = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  };

  usuarios.push(persona);
  mostrarDatos(persona.nombre, persona.apellido, persona.edad, persona.id);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  id++;
};


}

export function alarma (e) {

  if (e.target.matches(".btn-editar")) {
    let obtenerId = e.target.getAttribute("data-id");
    inputNombre.value = usuarios[obtenerId].nombre;
    inputApellido.value = usuarios[obtenerId].apellido;
    inputEdad.value = usuarios[obtenerId].edad;
  
    let prueba = usuarios[obtenerId];
    prueba = objeto;
  
    mostrarDatos(prueba.nombre, prueba.apellido, prueba.edad, obtenerId);
    console.log(usuarios);
  }


  const date = document.getElementById("date");
  const tempo = document.getElementById("tempo");
  const mostrarTiempo = document.getElementById("mostrar-tiempo");
  const duracionTempo =document.getElementById("duracion-tempo");
  const alarma = document.getElementById("alarma");
    

  if (e.target.matches("#btn-date")) {
    let tiempo = tempo.value;
    //let tiempo = new Date()

    const inter = setInterval(() => {
      tiempo--;
      mostrarTiempo.textContent = tiempo;
    }, 1000);

    setTimeout(() => {
      iniciarAlarma(alarma)
      clearInterval(inter);
      
      setTimeout(() => {
        pausarAlarma(alarma)
      }, duracionTempo.value * 1000);
    }, tiempo * 1000);
  }  


const iniciarAlarma = (alarma) => {
  alarma.play();
}

const pausarAlarma = (alarma) => {
  alarma.pause();
}
}
/* let url = "https://secure.runescape.com/m=hiscore_oldschool_hardcore_ironman/overall";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
 */


