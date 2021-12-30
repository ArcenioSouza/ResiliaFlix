let posterPagInicial;
let pagInicial = document.querySelector("#pagina-inicial")
let contatos = document.querySelector("#contatos")
let filmes = document.querySelector("#informacoes")
let buscar = document.querySelector("#buscar")
let configuracao = document.querySelector("#configuracao")
let sair = document.querySelector("#sair")



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


pagInicial.addEventListener("click", () => (location = "../pages/home.html"));
contatos.addEventListener("click", () => (location = "../pages/contatos.html"));
filmes.addEventListener("click", () => (location = "../pages/informacoes.html"));
buscar.addEventListener("click", () => (location = "../pages/buscar.html"));
sair.addEventListener("click", () => (location = "../../index.html"));
configuracao.addEventListener("click", () => {
   const divConfig = document.querySelector('#itens-config')
   if(divConfig.style.display == 'none'){
      divConfig.style.display = 'flex'

      setTimeout(()=>{
         divConfig.style.display = 'none'
      }, [3000])

   } else {
      divConfig.style.display = 'none'
   }
});