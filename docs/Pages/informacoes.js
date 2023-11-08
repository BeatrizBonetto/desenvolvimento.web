$(document).ready(function() { // essa função funciona quando o HTML estiver totalmente carregado.
    $('.localizacao li a').on('click', function(event) { //o elemento (on) é para associar uma função aos elementos selecionados
      event.preventDefault(); // é usado para impedir que o navegador siga o link do botão.
      window.open($(this).attr('href')); // assim que o usuário clicar no link, será executado e uma nova guia será aberta.
    });
  });
  