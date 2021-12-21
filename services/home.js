(function () {
   let titles1 = ['tt0108778', 'tt0898266', 'tt7556122', 'tt0944947']

   let titles2 = ['tt4052886', 'tt11126994', 'tt4145054', 'tt1520211']

   let titles3 = ['tt5180504', 'tt2661044', 'tt2193021', 'tt5420376']

   titles1.forEach(element => {
      
      $.ajax({
         type: "GET",
         url: `https://www.omdbapi.com/?i=${element}&apikey=4adad40c`,
         success: function (response) {  
            $('#carousel1').append(`<img class="poster" id="${response.imdbID}" src="${response.Poster}">`)
         }
      });
   })

   titles2.forEach(element => {
      
      $.ajax({
         type: "GET",
         url: `https://www.omdbapi.com/?i=${element}&apikey=4adad40c`,
         success: function (response) {  
            $('#carousel2').append(`<img class="poster" id="${response.imdbID}" src="${response.Poster}">`)
         }
      });
   })

   titles3.forEach(element => {
      
      $.ajax({
         type: "GET",
         url: `https://www.omdbapi.com/?i=${element}&apikey=4adad40c`,
         success: function (response) {  
            $('#carousel3').append(`<img class="poster" id="${response.imdbID}" src="${response.Poster}">`)
         }
      });
   })
})()

let myCarousel = document.querySelector('#carouselExampleSlidesOnly')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 20000,
})

const buttonBuscar = document.querySelector('#btnBuscar')

buttonBuscar.addEventListener('click', () => {
   window.location = './pagBuscar.html'
})