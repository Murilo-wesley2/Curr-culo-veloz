const btTestarExemplo = document.querySelector('#btTestarExemplo');

if (btTestarExemplo) {
  btTestarExemplo.addEventListener('click', () => {
    const sample = {
      nome: 'Maria Silva',
      estado: 'SP',
      municipio: 'São Paulo',
      email: 'maria.silva@example.com',
      perfil: 'Designer de interfaces com foco em acessibilidade e performance. Experiência em projetos responsivos e design systems.',
      experiencias: [
        'Agência Criativa — Designer UI (01/2022 - 12/2023): Criação de interfaces para web e mobile',
        'Startup XYZ — Product Designer (01/2024 - Atual): Liderança de design em produto ágil'
      ],
      habilidades: [
        'Figma', 'Adobe XD', 'HTML5', 'CSS3', 'JavaScript básico'
      ],
      formacoes: [
        'Design Gráfico — Faculdade ABC Conclusão: 12/2020',
        'UX Design — Curso Online Conclusão: 06/2021'
      ]
    };

    localStorage.setItem('curriculoData', JSON.stringify(sample));
    // Redireciona para o currículo e pede geração automática de PDF
    window.location.href = 'curriculo.html?autoPdf=1';
  });
}
