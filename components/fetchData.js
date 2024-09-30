import pintarCards from "./pintarCarrito.js";


const fetchData = async () => {
  try {
    const res = await fetch("../api.json");
    const data = await res.json();
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;