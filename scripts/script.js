const btgerador = document.querySelector("#gerar-pdf");
btgerador.addEventListener("click", () => {
  // Conteúdo do PDF
  const content = document.querySelector(".resume-container");
  
  // Configuraçõa do arquivo final do PDF
  const options = {
    margin: [0, 0, 0, 0],
    filename: "curriculo.pdf", 
    html2canvas: {scale: 2},
    jsPDF: {unit:"mm", format:"a4", orientation:"portrait"},
    pagebreak: {mode: "avoid"}
  };
  
  // Gerar e baixar o pdf
  html2pdf().set(options).from(content).save();
})