let posterPagInfo;

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

document
   .querySelector("#pagina-inicial")
   .addEventListener("click", () => (location = "../pages/home.html"));
