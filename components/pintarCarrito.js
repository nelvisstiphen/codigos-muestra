const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const items = document.getElementById("items");

const pintarCards = data => {
  
  data.forEach(producto => {
    templateCard.querySelector("h5").textContent = producto.title;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl)

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
}


export default pintarCards;