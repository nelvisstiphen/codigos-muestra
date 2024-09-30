export default function seccionCodigos(){

  const html = document.getElementById("html");
  const css = document.getElementById("css");
  const js = document.getElementById("js");

    html.style.display = "block";
    css.style.display = "none";
    js.style.display = "none";

  document.addEventListener("click", e => {

    if(e.target.matches(".btn-html")) {
      html.style.display = "block";
      css.style.display = "none";
      js.style.display = "none";
    }

    if(e.target.matches(".btn-css")) {
      html.style.display = "none";
      css.style.display = "block";
      js.style.display = "none";
    }

    if(e.target.matches(".btn-js")) {
      html.style.display = "none";
      css.style.display = "none";
      js.style.display = "block";
    }
  })
}