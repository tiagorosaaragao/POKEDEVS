// Seleciona todos os elementos necessários
const pokedevCards = document.querySelectorAll('.cartao-pokedev');
const pokedevListItems = document.querySelectorAll('.listagem .pokedev');

// Função para exibir o cartão correspondente
function mostrarCartao(id) {
    // Oculta todos os cartões
    pokedevCards.forEach(card => {
        card.classList.remove('aberto');
    });

    // Mostra o cartão correspondente ao id
    const cartaoParaMostrar = document.getElementById(`cartao-${id}`);
    if (cartaoParaMostrar) {
        cartaoParaMostrar.classList.add('aberto');
    }
}

// Adiciona eventos de clique a cada item da lista
pokedevListItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os itens da lista
        pokedevListItems.forEach(li => li.classList.remove('ativo'));
        
        // Adiciona a classe 'ativo' ao item clicado
        item.classList.add('ativo');

        // Mostra o cartão correspondente
        mostrarCartao(item.id);
    });
});

// Inicializa mostrando o primeiro cartão
if (pokedevListItems.length > 0) {
    mostrarCartao(pokedevListItems[0].id);
}
