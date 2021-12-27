let filmesController = new FilmesController();
let listaDeFilmes = new ListaFilmes();
let carousel = new Carousel();
let filme = new InfoFilme();
let cards = document.querySelector("#cards");
let divInformacoes = document.querySelector('.container-informacoes')
let poster;
let infoFilmes;
let btnCadastro = document.querySelector('#btnCadastro')
let btnEntrar = document.querySelector('#btnEntrar')

window.addEventListener("load", () => {
   filmesController._criaListaDeFilmes(listaDeFilmes._listaFilmes);

   setTimeout(() => {
      let largura = window.screen.width;
      let href = window.location.href;

      if (largura > 1000 && href.indexOf("informacoes") > 0) {
         cards.innerHTML = carousel._templatePosterInformacoesDesktop(
            listaDeFilmes._listaFilmes
         );
         setTimeout(() => {
            let info = new Informacoes();
            divInformacoes.innerHTML = info._viewInfoFilme();
         }, [1000]);

      } else if (largura > 500 && href.indexOf("informacoes") > 0) {
         cards.innerHTML = carousel._templatePosterInformacoesTablet(
            listaDeFilmes._listaFilmes
         );
         setTimeout(() => {
            let info = new Informacoes();
            divInformacoes.innerHTML = info._viewInfoFilme();
         }, [1000]);

      }else if (largura < 500 && href.indexOf("informacoes") > 0) {
            cards.innerHTML = carousel._templatePosterInformacoesMobile(
               listaDeFilmes._listaFilmes
            );
            setTimeout(() => {
               let info = new Informacoes();
               divInformacoes.innerHTML = info._viewInfoFilme();
            }, [1000]);

      } else if (largura > 1000) {
         cards.innerHTML = carousel._templatePosterDesktop(
            listaDeFilmes._listaFilmes
         );
      } else if (largura > 500) {
         cards.innerHTML = carousel._templatePosterTablet(
            listaDeFilmes._listaFilmes
         );
      } else {
         cards.innerHTML = carousel._templatePosterMobile(
            listaDeFilmes._listaFilmes
         );
      }

      poster = document.querySelectorAll(".poster");
      

      Array.from(poster).forEach((e) =>
         e.addEventListener("click", (e) => {
            e.preventDefault()
            let href = window.location.href
            const idFilme = e.target.id
            filmesController._buscarInformacoes(idFilme)

            if(href.indexOf("informacoes") > 0){

            } else if (href.indexOf("home") > 0) {
               location = './informacoes.html'
            } else {
               location = './src/pages/informacoes.html'
            }

            setTimeout(() => {
               let info = new Informacoes();
               divInformacoes.innerHTML = info._viewInfoFilme();
            }, [1000]);
         })
      );

   }, [1500]);
});

btnCadastro.addEventListener('click', () => location = './src/pages/cadastro.html')

btnEntrar.addEventListener('click', () => location = './src/pages/logIn.html')
