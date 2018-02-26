function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.beginPath();//establecemos la posicion inicial del lapiz
    
    lienzo.arc(100,100,50,0,Math.PI*2,false);
    
    
    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);