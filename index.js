//import carritoCompra from "./components/carrito-compra.js";
import seccionCodigos from "./components/seccion-codigos.js";
import todoList, { btnEliminarTodo } from "./components/todo-list.js";
import registroUsuarios, { alarma } from "./registro-usuarios.js";

document.addEventListener("DOMContentLoaded", () => {
  //fetchData();
  //carritoCompra();
  registroUsuarios();

  todoList();
  seccionCodigos();
});



document.addEventListener("click", e => {

  alarma(e);
  btnEliminarTodo(e);
})  



