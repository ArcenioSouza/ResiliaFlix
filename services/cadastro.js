
const buttonPagInicial = document.querySelector('#paginaInicial')

buttonPagInicial.addEventListener('click', () => {
   
   window.location = '../../index.html'
})


const cadastrar= document.querySelector("#btnCadastrar");
const div1= document.querySelector("#coluna1");
const div2= document.querySelector("#coluna2");
const div3= document.querySelector("#coluna3");
const cadastroOk= document.querySelector("#cadastroSucesso");

cadastrar.addEventListener('click', (e)=>{

  e.preventDefault()

  div1.style.display= "none";
  div2.style.display= "none";
  div3.style.display= "none";
  cadastroOk.style.display="flex"



})