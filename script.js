document.getElementById('downloadButton').addEventListener('click', function() {
    const filename = 'GerardoZentenoResume2023.pdf';
  
    // URL del archivo PDF (puedes reemplazar esta URL con la del archivo que desees descargar)
    const pdfUrl = 'GerardoZentenoResume.pdf';
  
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = filename;
  
    downloadLink.click();
  });
  