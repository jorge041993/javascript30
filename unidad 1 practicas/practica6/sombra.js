function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    
    lienzo.shadowColor="rgba(0,0,0,0.5)";

    lienzo.shadowOffsetX=4;
    lienzo.shadowOffsetY=4;
    
    lienzo.shadowBlur=5;
    lienzo.font="bold 50px verdana, seans-serif";
    lienzo.fillText("Mi Mensaje", 100,100);
}
window.addEventListener("load", iniciar, false);