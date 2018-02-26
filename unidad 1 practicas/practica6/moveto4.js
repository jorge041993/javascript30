function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.beginPath();//establecemos la posicion inicial del 
    //se obtiene un arco de cubre 48° de un circulo
    var radianes = Math.PI/180*45;
    lienzo.arc(100,100,50,0,radianes,true);
    
    
    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);