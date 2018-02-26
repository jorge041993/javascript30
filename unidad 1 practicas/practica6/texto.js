function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    
    lienzo.font="bold 24px verdana, seans-serif";
    lienzo.textAling="start";

    lienzo.fillText("mi mensaje", 100,100)

    lienzo.strokeText();
}
window.addEventListener("load", iniciar, false);