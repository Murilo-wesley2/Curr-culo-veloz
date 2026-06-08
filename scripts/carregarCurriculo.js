function criarElementoLista(texto) {
  const item = document.createElement("li");
  item.textContent = texto;
  return item;
}

function carregarCurriculo() {
  const dados = localStorage.getItem("curriculoData");
  if (!dados) {
    return;
  }

  const { nome, estado, municipio, email, perfil, experiencias, habilidades, formacoes } = JSON.parse(dados);

  const nomeCurriculo = document.querySelector("#nomeCurriculo");
  const cargoCurriculo = document.querySelector("#cargoCurriculo");
  const contatoLocal = document.querySelector("#contatoLocal");
  const contatoEmail = document.querySelector("#contatoEmail");
  const perfilCurriculo = document.querySelector("#perfilCurriculo");
  const experienciaCurriculo = document.querySelector("#experienciaCurriculo");
  const skillsCurriculo = document.querySelector("#skillsCurriculo");
  const formacaoCurriculo = document.querySelector("#formacaoCurriculo");

  if (nomeCurriculo) nomeCurriculo.textContent = nome || "Nome não informado";
  if (cargoCurriculo) cargoCurriculo.textContent = `${estado || ""}${estado && municipio ? ", " : ""}${municipio || ""}`;
  if (contatoLocal) contatoLocal.textContent = `${municipio || ""}${municipio ? ", " : ""}${estado || ""}`;
  if (contatoEmail) contatoEmail.textContent = `✉️ ${email || "email@exemplo.com"}`;
  if (perfilCurriculo) perfilCurriculo.textContent = perfil || "Perfil profissional não informado.";

  if (experienciaCurriculo && experiencias && experiencias.length) {
    experienciaCurriculo.innerHTML = "";
    experiencias.forEach(item => experienciaCurriculo.appendChild(criarElementoLista(item)));
  }

  if (skillsCurriculo && habilidades && habilidades.length) {
    skillsCurriculo.innerHTML = "";
    habilidades.forEach(skill => {
      const span = document.createElement("span");
      span.className = "skill-tag";
      span.textContent = skill;
      skillsCurriculo.appendChild(span);
    });
  }

  if (formacaoCurriculo && formacoes && formacoes.length) {
    formacaoCurriculo.innerHTML = "";
    formacoes.forEach(itemStr => {
      // tenta extrair curso, instituição e conclusão de formatos comuns
      let curso = itemStr;
      let instituicao = "";
      let conclusao = "";

      const parts = itemStr.split(" — ");
      if (parts.length >= 2) {
        curso = parts[0].trim();
        let rest = parts.slice(1).join(" — ").trim();

        const conclMatch = rest.match(/Conclusão:\s*(.*)$/i);
        if (conclMatch) {
          conclusao = conclMatch[1].trim();
          instituicao = rest.replace(conclMatch[0], "").trim();
        } else {
          const parMatch = rest.match(/^(.*)\s*\(([^)]+)\)\s*$/);
          if (parMatch) {
            instituicao = parMatch[1].trim();
            conclusao = parMatch[2].trim();
          } else {
            instituicao = rest.trim();
          }
        }
      }

      const div = document.createElement("div");
      div.className = "education-item";
      const strong = document.createElement("strong");
      strong.textContent = `${curso}${instituicao ? " — " + instituicao : ""}`.trim();
      div.appendChild(strong);
      if (conclusao) {
        div.appendChild(document.createElement("br"));
        const small = document.createElement("small");
        small.textContent = `Conclusão: ${conclusao}`;
        div.appendChild(small);
      }
      formacaoCurriculo.appendChild(div);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  carregarCurriculo();
  const params = new URLSearchParams(window.location.search);
  if (params.get('autoPdf') === '1') {
    // espera um pouco para garantir renderização e então aciona o gerador
    setTimeout(() => {
      const btn = document.querySelector('#gerar-pdf');
      if (btn) btn.click();
    }, 800);
  }
});
