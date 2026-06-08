const botaoEnviarCurriculo = document.querySelector("#btEnviarCurriculo");

if (botaoEnviarCurriculo) {
  botaoEnviarCurriculo.addEventListener("click", function() {
    const dados = {
      nome: document.querySelector("#nome").value.trim(),
      estado: document.querySelector("#estado").value,
      municipio: document.querySelector("#municipio").value.trim(),
      email: document.querySelector("#email").value.trim(),
      perfil: document.querySelector("#detalhamento").value.trim(),
      experiencias: Array.from(document.querySelectorAll("#experienciasProfissionais li")).map(li => li.textContent.trim()),
      habilidades: Array.from(document.querySelectorAll("#HabilidadesTecnicas li")).map(li => li.textContent.trim()),
      formacoes: Array.from(document.querySelectorAll("#formacoesAcademicas li")).map(li => li.textContent.trim())
    };

    localStorage.setItem("curriculoData", JSON.stringify(dados));
    window.location.href = "curriculo.html";
  });
}
