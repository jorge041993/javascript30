function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.beginPath();
    lienzo.shadowColor="rgba(0,0,0,0.5)";
    lienzo.moveTo(100, 100);
    lienzo.lineTo(200, 200);
    
    lienzo.shadowOffsetX=4;
    lienzo.shadowOffsetY=4;

    
    lienzo.stroke();

    lienzo.shadowBlur=5;
    lienzo.beginPath();
    
    
    

}
window.addEventListener("load", iniciar, false);