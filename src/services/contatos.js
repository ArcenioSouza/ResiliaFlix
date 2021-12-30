const buttonPagInicial = document.querySelector("#pagina-inicial");
const buttonContatos = document.querySelector("#contatos");

buttonPagInicial.addEventListener("click", () => {
   window.location = "../../index.html";
});

buttonContatos.addEventListener("click", () => {
  window.location = "../pages/contatos.html";
});