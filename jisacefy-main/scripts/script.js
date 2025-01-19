// arquivo destinado a programação da barra de pesquisa


function registerSearch() {
    const searchInput = document.getElementById('searchInput').value.trim();

    if (searchInput) {
        // Armazena a busca no localStorage
        let searches = JSON.parse(localStorage.getItem('searches')) || [];

        // Evita duplicatas
        if (!searches.includes(searchInput)) {
            searches.push(searchInput);
            localStorage.setItem('searches', JSON.stringify(searches));

            // Atualiza a lista de buscas
            displaySearches();
        }

        // Limpa o campo de entrada após a busca
        document.getElementById('searchInput').value = '';

        // Opcionalmente redirecionar ou realizar a busca
        console.log("Busca registrada:", searchInput);
    }
}

function displaySearches() {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    const searchHistory = document.getElementById('searchHistory');

    // Limpa a lista antes de atualizar
    searchHistory.innerHTML = '';

    searches.forEach(search => {
        const li = document.createElement('li');
        li.textContent = search;
        searchHistory.appendChild(li);
    });
}

// Carrega as buscas ao iniciar a página
window.onload = displaySearches;