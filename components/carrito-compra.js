import fetchData from "./fetchData.js";

export default function carritoCompra() {
  const cards = document.getElementById("cards");
  
  const footer = document.getElementById("footer");
  
  const templateFooter = document.getElementById("template-footer").content;
  const templateCarrito = document.getElementById("template-carrito").contentEditable;
  
  let carrito = {}

  fetchData();

  
  
}


