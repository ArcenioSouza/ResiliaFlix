class Informacoes{

   constructor(element){
      this.element = element
   }

   _updateTemplate(infoFilme) {
      this.element.innerHTML = this._viewInfoFilme(infoFilme)
   }
   

   _viewInfoFilme(filme){
      return `
      <div class="background-informacoes">
         <div id="imagem">
            <img src="${filme._url}" alt="" />
         </div>
         <div id="informacoes">
            <h1 id="titulo">${filme._titulo}</h1>
            <p><span id="ano">${filme._ano}</span> | <span id="tempo">${filme._tempo}</span></p>
            <p id="descricao">${filme._descricao}</p>
            <p id="elenco">Elenco:<br><span id="elenco">${filme._elenco}</span></p>
            <p id="genero">Genero:<br><span id="genero">${filme._genero}</span></p>
         </div>
      </div>        
      `
   }
}