function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    
    lienzo.font="bold 20px verdana, seans-serif";
    lienzo.fillText("Mi mensaje", 50, 20);

    lienzo.translate(50,70);

    lienzo.rotate(Math.PI/180*45);

    lienzo.fillText("PRUEBA", 0,0);

    lienzo.rotate(-Math.PI/180*45);

    lienzo.translate(0,100);

    lienzo.scale(2,2);

    lienzo.fillText("ESCALA", 0,0);

    lienzo.translate(0,30);
    
        lienzo.scale(2,2);
    
        lienzo.fillText("ESCALA2", 0,0);
   
}
window.addEventListener("load", iniciar, false);