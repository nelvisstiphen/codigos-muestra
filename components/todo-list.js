 const itemsTodo = document.getElementById("items-todo");
 const padreTodo = document.getElementById("padre-todo");
 let id = 0;
export default function todoList() {
  
  const inputNotas = document.getElementById("input-notas");

  const formNotas = document.getElementById("form-notas");

  const templateTodo = document.getElementById("template-todo").content;
  const fragmento = document.createDocumentFragment();
 
  
  let tareas = {}

  formNotas.addEventListener("submit", (e) => {
    e.preventDefault();

    agregarTareas(id, "titulo", inputNotas.value)
    id++;
  });

  const mostrarTareas = (id, titulo, content) => {
    templateTodo.getElementById("titulo").textContent = titulo;
    templateTodo.getElementById("nota").textContent = content;
    templateTodo.getElementById("btn-eliminar-todo").dataset.id = id;
    const clone = templateTodo.cloneNode(true);

    fragmento.appendChild(clone);
    itemsTodo.appendChild(fragmento);
    
}
  
  const agregarTareas = (id, titulo, content) => {
    tareas = {
      id: id,
      titulo: titulo,
      content: content
    }
    mostrarTareas(tareas.id, tareas.titulo, tareas.content)
  };
  
}





export const btnEliminarTodo = (e) => {
  
  const nota = document.getElementById("nota");
  //console.log(e.target)
  
  if (e.target.matches("#btn-eliminar-todo")) {
    console.log(itemsTodo[1])

  }
};
