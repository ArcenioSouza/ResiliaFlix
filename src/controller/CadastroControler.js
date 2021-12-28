class CadastroController {

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
         success: function(data){
            console.log(`${data.nome} cadastrado no sistema`)
         },
         error: function(error){
            if(error.status == 500){
               console.log("Esse e-mail já existe no sistema")
            } else {
               console.log(error.responseText)
            }
            
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