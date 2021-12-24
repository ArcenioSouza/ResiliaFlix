var form = document.forms[0];
 
  
form.addEventListener ('submit', event => {
  event.preventDefault();
});


function envioDeEmail() { 
  
  let input = document.querySelector("#exampleInputEmail1");

  const valido = document.querySelector("#valido");
  
  const invalido = document.querySelector("#invalido");

   let email = input.value;
  

     if( email.indexOf("@") >= 1 &&  email.indexOf(".") >= 1) {
        valido.innerText = "Enviamos uma redefinição de senha para seu email!"
     }
    else { 
        invalido.innerText = "Insira um email válido e tente novamente"
    }



}