const inputExperiencia = document.querySelector("#AdicionarEx");
const btAdicionar = document.querySelector("#btAdicionarEx");
const lista = document.querySelector("#experienciasProfissionais");

// Evento de clique para adicionar
btAdicionar.addEventListener("click", function() {
    const valorInput = inputExperiencia.value.trim();
            
    if (valorInput === "") {
        alert("Digite algo para adicionar!");
            return;
        }
            
        const item = document.createElement("li");
        item.textContent = valorInput;
        item.classList.add("item-tarefa"); // Classe adicionada para o querySelectorAll identificar depois
            
        // Remove o item individual ao clicar
        item.onclick = function() {
            item.remove();
        };

        lista.appendChild(item);
        inputExperiencia.value = ""; // Limpa o campo
    });