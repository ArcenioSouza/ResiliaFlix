
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

  if ($("#ruaInput").val()=="" || $("#bairroInput").val()=="" || $("#cidadeInput").val()=="" ||
      $("#estadoInput").val() == "" || $("#nomeInput").val()=="" || $("#emailInput").val()=="" || $("#senhaInput").val()=="" || $("#confirmaSInput").val()=="" || $("#complementoInput").val()=="" || $("#numeroInput").val()=="") {
     
      alert("Preencha todos os campos antes de cadastrar");

    
  }else {
    cadastroOk.style.display= "flex";
    div1.style.display= "none";
    div2.style.display= "none";
    div3.style.display= "none";
    }

})

const cep= document.querySelector("#cepInput");

    cep.addEventListener('blur', (event) => {

      try {

        const cepVal= $("#cepInput").val()

        if (cepVal.length == "9" && cepVal.indexOf("-") == 5) {

          $.ajax({
            type: "GET",
            url: `https://viacep.com.br/ws/${cepVal}/json/`,
            success: function (response) {
      
              const ruaResult= response.logradouro
              const bairroResult= response.bairro
              const cidadeResult= response.localidade
              const estadoResult= response.uf 

              $("#ruaInput").val(ruaResult);
              $("#bairroInput").val(bairroResult);
              $("#cidadeInput").val(cidadeResult);
              $("#estadoInput").val(estadoResult);
              $("#erroCep").text("");
            
          }})
  
        } else {

          throw new Error ("CEP inválido");

        }
        
      } catch (erro) {
        $("#erroCep").text("CEP inválido");
        console.log(erro.message)
        $("#ruaInput").val("");
        $("#bairroInput").val("");
        $("#cidadeInput").val("");
        $("#estadoInput").val("");

      }
      
    })


const emailErro= document.querySelector("#emailInput")

emailErro.addEventListener('blur', ()=> {

  const emailVal= $("#emailInput").val()
  try {
    if (emailVal.indexOf("@") > 0){
      
      $("#erroEmail").css("display", "none")

    } else {
      throw new Error ("E-mail inválido");
    }
  } catch (erro) {
  
      $("#erroEmail").text("E-mail inválido");
      $("#erroEmail").css("display", "flex")
      console.log(erro.message)

  }
})

const senhaInput= document.querySelector("#senhaInput")

senhaInput.addEventListener('blur', () => {

  const senhaVal= $("#senhaInput").val()
 

  try {

    if (senhaVal.length == 8) {
      
      $("#erroSenha").css("display", "none")

    } else {
      throw new Error ("Senha inválida")
    }     
    
  } catch(erro) {
    $("#erroSenha").text("Deve conter 8 caracteres");
    $("#erroSenha").css("display", "flex")
    console.log(erro.message)

  }

})


const confirmSenha= document.querySelector("#confirmaSInput")

confirmSenha.addEventListener('blur', () => {

  const confirmSVal= $("#confirmaSInput").val()
  const senhaVal= $("#senhaInput").val()

  try {

    if (confirmSVal.length == senhaVal.length) {
      
      $("#erroSenha1").css("display", "none")

    } else {
      throw new Error ("Senha inválida")
    }     
    
  } catch(erro) {
    $("#erroSenha1").text("Senha inválida");
    $("#erroSenha1").css("display", "flex")
    console.log(erro.message)

  }

})

