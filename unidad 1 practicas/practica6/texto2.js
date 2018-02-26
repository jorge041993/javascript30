function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    
    lienzo.font="bold 24px verdana, seans-serif";
    lienzo.textAling="start";

    lienzo.textBaseline="buttom";
    lienzo.fillText("mi mensaje", 100,124);

    var tamaño = lienzo.measureText("Mi mensaje");

    lienzo.strokeRect(100,100,tamaño.width,24);
}
window.addEventListener("load", iniciar, false);