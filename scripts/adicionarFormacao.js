const inputCurso = document.querySelector("#AdicionarFormacaoCurso");
const inputInstituicao = document.querySelector("#AdicionarFormacaoInst");
const inputConclusao = document.querySelector("#AdicionarFormacaoConclusao");
const btAdicionarFormacao = document.querySelector("#btAdicionarFormacao");
const listaFormacao = document.querySelector("#formacoesAcademicas");

btAdicionarFormacao.addEventListener("click", function() {
    const curso = inputCurso.value.trim();
    const instituicao = inputInstituicao.value.trim();
    const conclusao = inputConclusao.value;

    if (curso === "" || instituicao === "" || conclusao === "") {
        alert("Preencha curso, instituição e conclusão para adicionar.");
        return;
    }

    const item = document.createElement("li");
    item.textContent = `${curso} — ${instituicao} Conclusão: ${conclusao}`;
    item.classList.add("item-tarefa");

    item.onclick = function() {
        item.remove();
    };

    listaFormacao.appendChild(item);
    inputCurso.value = "";
    inputInstituicao.value = "";
    inputConclusao.value = "";
});