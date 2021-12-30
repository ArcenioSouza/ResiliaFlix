function recuperarSenha() { 

  window.location.replace("../pages/recupSenha.html");

}

function cadastrarUsuario () { 

  window.location.replace("../pages/cadastro.html");


}



var form = document.forms[0];
 
  
form.addEventListener ('submit', event => {
  event.preventDefault();
});




const entrarSite = document.querySelector("#btnForm")

entrarSite.addEventListener('click', function () {

 const controler = new CadastroController ()
 const InputEmail = document.querySelector("#exampleInputEmail1").value
 
 controler._verificarUsuario(InputEmail)


})

const buttonPagInicial = document.querySelector("#pagina-inicial");
const buttonContatos = document.querySelector("#contatos");

buttonPagInicial.addEventListener("click", () => {
   window.location = "../../index.html";
});

buttonContatos.addEventListener("click", () => {
  window.location = "../pages/contatos.html";
});


  
 

   
  

    



