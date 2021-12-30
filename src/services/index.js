let btnCadastro = document.querySelector("#btnCadastro");
let btnEntrar = document.querySelector("#btnEntrar");
let posterPagInicial;

window.addEventListener("load", () => {
   let filmesController = new FilmesController();
   let bancoDeDados = new ListaFilmes();
   filmesController._criaListaDeFilmes(bancoDeDados._listaFilmes);
});

btnCadastro.addEventListener(
   "click",
   () => (location = "./src/pages/cadastro.html")
);

btnEntrar.addEventListener(
   "click",
   () => (location = "./src/pages/logIn.html")
);
