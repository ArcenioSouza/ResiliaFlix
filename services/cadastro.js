
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



  if ($("#ruaInput").val()=="" && $("#bairroInput").val()=="" && $("#cidadeInput").val()=="" &&
   $("#estadoInput").val() == "") {
      alert("Preencha todos os campos anets de cadastrar");
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

  




