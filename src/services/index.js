let btnCadastro = document.querySelector("#btnCadastro");
let btnEntrar = document.querySelector("#btnEntrar");
let posterPagInicial;

window.addEventListener("load", () => {
   let filmesController = new FilmesController();
   let bancoDeDados = new ListaFilmes();
   filmesController._criaListaDeFilmes(bancoDeDados._listaFilmes);
});

setTimeout(() => {
   posterPagInicial = document.querySelectorAll(".poster");
   Array.from(posterPagInicial).forEach((e) =>
      e.addEventListener("click", (e) => {
         e.preventDefault();
         let href = window.location.href;
         const idFilme = e.target.id;
         let filmesController = new FilmesController();
         filmesController._buscarInformacoes(idFilme);

         setTimeout(() => {
            if (href.indexOf("informacoes") > 0) {
            } else if (href.indexOf("home") > 0) {
               location = "./informacoes.html";
            } else {
               location = "./src/pages/informacoes.html";
            }
         }, [1000]);
      })
   );
}, [2000]);

btnCadastro.addEventListener(
   "click",
   () => (location = "./src/pages/cadastro.html")
);

btnEntrar.addEventListener(
   "click",
   () => (location = "./src/pages/logIn.html")
);
