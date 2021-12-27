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


function validacaoEmail () { 
  
  let input = document.querySelector("#exampleInputEmail1");
  
  const invalido = document.querySelector("#invalido")

   let email = input.value;
  

     if( email.indexOf("@") >= 1 &&  email.indexOf(".") >= 1) {
        alert ("email válido")
     }
    else { 
        invalido.innerText = "Insira um email válido"
    }



}