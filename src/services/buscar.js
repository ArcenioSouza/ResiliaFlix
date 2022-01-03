let pagInicial = document.querySelector("#pagina-inicial")
let contatos = document.querySelector("#contatos")
let filmes = document.querySelector("#informacoes")
let buscar = document.querySelector("#buscar")
let configuracao = document.querySelector("#configuracao")
let sair = document.querySelector("#sair")

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

const inputBusca = document.querySelector("#inputBusca");

inputBusca.addEventListener("keyup", () => {
   let valorInput = $("#inputBusca").val();

   $.ajax({
      type: "GET",
      url: `https://www.omdbapi.com/?apikey=4adad40c&s=${valorInput}`,
      success: function (response) {
         try {
            const result = response.Search;
            let divBusca = $(`<div class="imagens-busca"></div>`);
               result.forEach((element) => {
                  if(element.Poster != "N/A"){
                     divBusca.append(
                        `<img class="posterBusca" id="${element.imdbID}" src="${element.Poster}">`
                     );
                  }                  
               });
            
            $("#resultadoBusca").html(divBusca);
         } catch {
            let divBusca = $(`<div class="semResultado"></div>`);
            let divResultado = $(`<h1>Nenhum resultado encontrado</h1>`)
            divBusca.append(divResultado)
            $("#resultadoBusca").html(divBusca);
            throw new Error('Input em branco')       
         }
      },
   });

   setTimeout(() => {
      let posterPagBusca = document.querySelectorAll(".posterBusca");
      Array.from(posterPagBusca).forEach((e) =>
         e.addEventListener("click", (e) => {
            e.preventDefault();
            let href = window.location.href;
            const idFilme = e.target.id;
            console.log(idFilme)
            let filmesController = new FilmesController();
            filmesController._buscarInformacoes(idFilme);
   
            setTimeout(() => {
               if (href.indexOf("informacoes") > 0) {
               } else if (href.indexOf("home") > 0) {
                  location = "./informacoes.html";
               } else {
                  location = "./informacoes.html";
               }
            }, [1000]);
         })
      );
   }, [1000]);

   
});




