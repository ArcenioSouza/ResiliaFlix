let posterPagInfo;
let pagInicial = document.querySelector("#pagina-inicial")
let contatos = document.querySelector("#contatos")
let filmes = document.querySelector("#informacoesList")
let buscar = document.querySelector("#buscar")
let configuracao = document.querySelector("#configuracao")
let sair = document.querySelector("#sair")

window.addEventListener("load", () => {
      let filmesController = new FilmesController();
      let bancoDeDados = new ListaFilmes();
      filmesController._criaListaDeFilmes(bancoDeDados._listaFilmes);
      let filme = JSON.parse(localStorage.getItem("infoFilme"));
      let elementHTMLInfoFilme = document.querySelector(
         ".container-informacoes"
      );
      let infoFilme = new Informacoes(elementHTMLInfoFilme);
      infoFilme._updateTemplate(filme);

});

setTimeout(() => {
   posterPagInfo = document.querySelectorAll(".poster");
   Array.from(posterPagInfo).forEach((e) =>
      e.addEventListener("click", (e) => {
         e.preventDefault();
         const idFilme = e.target.id;
         let filmesController = new FilmesController();
         filmesController._buscarInformacoes(idFilme);
         setTimeout(() => {
            location = "../pages/informacoes.html";
         }, [500])
         
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
