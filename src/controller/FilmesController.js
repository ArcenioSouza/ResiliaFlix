class FilmesController {
   constructor() {
      this._listaId = [
         "tt0108778",
         "tt0898266",
         "tt7556122",
         "tt0944947",
         "tt5180504",
         "tt2661044",
         "tt4052886",
         "tt11126994",
         "tt4145054",
         "tt1520211",
         "tt2193021",
         "tt5420376",
      ];
      
      this.elementHTMLCarousel = document.querySelector('#cards')
      this.carousel = new Carousel(this.elementHTMLCarousel);      
   }

   _criaListaDeFilmes(bancoDeDados) {

      this._listaId.forEach((element) => {
         $.ajax({
            type: "GET",
            url: `https://www.omdbapi.com/?i=${element}&apikey=4adad40c`,
            success: function (response) {
               let filme = new Filmes(
                  response.imdbID,
                  response.Title,
                  response.Poster,
                  response.Plot,
                  response.Year,
                  response.Runtime,
                  response.Actors,
                  response.Genre
               );
               bancoDeDados.push(filme);
            },
            error: function (erro) {
               console.log(erro)
            }
         })
      })
      
      setTimeout(()=>{
         try{
            this.carousel._updateTemplate(bancoDeDados)
         } catch(error){
            throw new Error(error)
         }
      },[500])
   }

   _buscarInformacoes(id) {
      $.ajax({
         type: "GET",
         url: `https://www.omdbapi.com/?i=${id}&apikey=4adad40c`,  
         success: function (response) {
            let infoFilme = new Filmes(
               response.imdbID,
               response.Title,
               response.Poster,
               response.Plot,
               response.Year,
               response.Runtime,
               response.Actors,
               response.Genre
            );
            localStorage.setItem("infoFilme", JSON.stringify(infoFilme));
         },
         error: function (erro) {
            console.log(erro)
         }
      })
   }
}