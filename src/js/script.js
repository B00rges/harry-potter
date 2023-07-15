const characters = document.querySelectorAll('.personagem')


characters.forEach(character => {
    character.addEventListener('mouseenter', () => {

     
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
        
        removerSelecaoPersonagem()

        character.classList.add('selecionado')

        alterarImagemPersonagem(character)
        alterarNomePersonagem(character)
        alterarDescricaoPersonagem(character)
    })  
})  


function alterarNomePersonagem(character) {
    const nomePerson = document.getElementById('nome-personagem')
    nomePerson.innerText = character.getAttribute('data-name')
}

function alterarDescricaoPersonagem(character) {
    const descricaoPerson = document.getElementById('descricao-personagem')
    descricaoPerson.innerText = character.getAttribute('data-description')
}

function alterarImagemPersonagem(character) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    const idPerson = character.attributes.id.value
    imagemPersonagemGrande.src = `./src/imagens/card-${idPerson}.jpg`
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    
    
}

