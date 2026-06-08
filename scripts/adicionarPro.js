const inputHabilidade = document.querySelector("#AdicionarPro");
const btAdicionarPro = document.querySelector("#btAdicionarPro");
const listaPro = document.querySelector("#HabilidadesTecnicas");

// Evento de clique para adicionar
btAdicionarPro.addEventListener("click", function() {
    const valorInput = inputHabilidade.value.trim();
            
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

        listaPro.appendChild(item);
        inputHabilidade.value = ""; // Limpa o campo
    });