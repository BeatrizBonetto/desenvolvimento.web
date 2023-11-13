const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.post('/api/usuarios/trocar-nome', (req, res) => {
  const { usuario } = req.body;
  res.json({ mensagem: `Nome trocado para ${usuario}` });
});

app.post('/api/carrinho/adicionar-item/:item', (req, res) => {
  const { item } = req.params;
  // Lógica para adicionar um item ao carrinho
  res.json({ mensagem: `Item ${item} adicionado ao carrinho` });
});

app.delete('/api/carrinho/remover-item/:item', (req, res) => {
  const { item } = req.params;
  // Lógica para remover um item do carrinho
  res.json({ mensagem: `Item ${item} removido do carrinho` });
});

app.delete('/api/carrinho/remover-produto/:produto', (req, res) => {
  const { produto } = req.params;
  // Lógica para remover um produto do carrinho
  res.json({ mensagem: `Produto ${produto} removido do carrinho` });
});

app.get('/api/carrinho/valor-compra', (req, res) => {
  const valorTotal = calcularValorTotalCompra(); // Função a ser implementada
  res.json({ valorTotal });
});

app.post('/api/carrinho/finalizar-compra', (req, res) => {
  // Lógica para finalizar a compra
  res.json({ mensagem: 'Compra finalizada com sucesso' });
});

// Função para calcular o valor total da compra (a ser implementada)
function calcularValorTotalCompra() {
  // Lógica para calcular o valor total da compra
  return 0;
}

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
