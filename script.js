// JavaScript integrado
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-buttons input[type="radio"]');
    const proposalCards = document.querySelectorAll('.proposal-card');

    // Función para filtrar las tarjetas
    function filterCards(category) {
        proposalCards.forEach(card => {
            if (category === "all" || card.classList.contains(category)) {
                card.classList.add("show");
            } else {
                card.classList.remove("show");
            }
        });
    }

    // Event listeners para los botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener("change", function () {
            const selectedCategory = this.id.replace("filter-", "");
            filterCards(selectedCategory);
        });
    });

    // Mostrar todas las tarjetas al cargar la página
    filterCards("all");
});