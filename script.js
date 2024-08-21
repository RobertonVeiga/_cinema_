const movies = document.getElementById('movies');
const theaters = document.getElementById('theaters');
const times = document.getElementById('times');
const selectedItems = document.getElementById('selectedItems');
const goToPaymentButton = document.getElementById('goToPayment');
const infoText = document.getElementById('infoText');

function updateSelectedItems() {
    selectedItems.innerHTML = `
        <p>Filme: ${movies.value}</p>
        <p>Adicional: ${theaters.value}</p>
        <p>Horário: ${times.value}</p>
    `;
}

movies.addEventListener('change', updateSelectedItems);
theaters.addEventListener('change', updateSelectedItems);
times.addEventListener('change', updateSelectedItems);

goToPaymentButton.addEventListener('click', function() {
    // URL da imagem que você deseja abrir
    const imageURL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX3KIV-Aw4jWYSK6VZR4QEl2mgBE9q8qdJE1F4LVMCKazyHQ87Ld-X0MnDDjNj0Jgm0RGguqLiU7gf6TLNB0S34idO0qQ-OzZEgkOA5ciljQzhZl84dlt48JFhKHl4fgiTeeb0WhQizs-a58pgKex8m4mCG4iXZYArA6TIEAHHxRIwg2aH-oHly-gjK6A/w636-h1089/gatewaySimulado.jpg";
    
    // Redireciona para o URL da imagem
    window.location.href = imageURL;
});

// Atualiza os itens selecionados inicialmente
updateSelectedItems();
