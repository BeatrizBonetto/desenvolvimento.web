$(document).ready(function(){
    var largura = window.innerWidth //verifica se o dispositivo é celular ou tablet.
    if(largura < 768 ){
        $(".descartáveis").hide(); //se o dispositivo for menor que 768px, oculta os chekboxs de descartáveis.
    }
});
