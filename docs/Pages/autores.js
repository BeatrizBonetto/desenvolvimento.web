$(document).ready(function() { //é usado para executar uma função quando o documento HTML estiver totalmente carregado.
    $('.author a').on('click', function(event) { //A segunda linha de código seleciona todos os elementos HTML com a classe author. Em seguida, usamos o método on() para associar uma função aos elementos selecionados.
      event.preventDefault();// impedir que o navegador siga o link do botão.
      window.open($(this).attr('href'));
    });
  });
  