// Obter as informações de compra da sessionStorage
var infoCompraString = sessionStorage.getItem('infoCompra');

if (infoCompraString) {
  // Converter a string JSON de volta para um objeto
  var infoCompra = JSON.parse(infoCompraString);

  // Exibir as informações na página
  var informacoesCompra = document.getElementById('informacoesCompra');
  informacoesCompra.innerHTML = `
    <p><strong>Produto:</strong> ${infoCompra.produto}</p>
    <p><strong>Quantidade:</strong> ${infoCompra.quantidade}</p>
    <!-- Adicione mais informações conforme necessário -->
  `;
} else {
  informacoesCompra.innerHTML = '<p>Nenhuma informação de compra disponível.</p>';
}
