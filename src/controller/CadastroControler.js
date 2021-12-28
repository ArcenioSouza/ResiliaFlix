class CadastroController {

   constructor(){
   
   }

   _salvarUsuario(dados){
      $.ajax({
         url: (`https://api-memorycard.herokuapp.com/cadastroResiliaFlix/`),
         method: 'post',
         data: {
            id: dados.email,
            nome: dados.nome,
            senha: dados.senha,
            cep: dados.cep,
            rua: dados.rua,
            bairro: dados.bairro,
            complemento: dados.complemento,
            cidade: dados.cidade,
            numero: dados.numero,
            estado: dados.estado
         },
         success: function(){
            $("#cadastroSucesso").css("display","flex");
            $("#coluna1").css("display","none");
            $("#coluna2").css("display","none");
            $("#coluna3").css("display","none");
            setTimeout(()=>{
               location = '../pages/home.html'
            }, [2000])
         },
         error: function(){
            throw new Error('Esse e-mail já está cadastrado em nosso sistema')            
         }
      })
   }

   _verificarUsuario(email){
      $.ajax({
         url: (`https://api-memorycard.herokuapp.com/cadastroResiliaFlix/${email}`),
         method: 'get',
         success: function(response){
            console.log('Usuário existente no banco de dados')
         }
      })
   }
}