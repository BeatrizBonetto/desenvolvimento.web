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
}// Função para enviar informações de compra para a sessionStorage
function enviarInformacoes() {
    var produto = document.getElementById('produto').value;
    var quantidade = document.getElementById('quantidade').value;

    // Criar um objeto com as informações de compra
    var infoCompra = {
        produto: produto,
        quantidade: quantidade
        // Adicione mais informações conforme necessário
    };

    // Converter o objeto para uma string JSON
    var infoCompraString = JSON.stringify(infoCompra);

    // Armazenar as informações na sessionStorage
    sessionStorage.setItem('infoCompra', infoCompraString);

    // Redirecionar para a próxima página
    window.location.href = 'teste';
}
// Função para enviar informações de compra para a sessionStorage
function enviarInformacoes() {
    var produtoSelecionado = document.getElementById('produto').value;
    var quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produtoSelecionado) {
        alert('Por favor, selecione um produto válido.');
        return;
    }

    // Criar um objeto com as informações de compra
    var infoCompra = {
        produto: produtoSelecionado,
        quantidade: quantidade
        // Adicione mais informações conforme necessário
    };

    // Converter o objeto para uma string JSON
    var infoCompraString = JSON.stringify(infoCompra);

    // Armazenar as informações na sessionStorage
    sessionStorage.setItem('infoCompra', infoCompraString);

    // Redirecionar para a próxima página
    window.location.href = '';
}

