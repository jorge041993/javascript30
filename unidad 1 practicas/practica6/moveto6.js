function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.beginPath();//establecemos la posicion inicial del 
    //se obtiene un arco de cubre 48° de un circulo
    
  lienzo.arc(200,150,50,0,Math.PI*2,false);
lienzo.stroke();

lienzo.lineWidth=10;
lienzo.lineCap = "round";
lienzo.beginPath();
lienzo.moveTo(230,150);
lienzo.arc(200,150,30,0,Math.PI,false);

lienzo.stroke();

lienzo.lineWidth=5;
lienzo.lineJoin="miter";
lienzo.beginPath();
lienzo.moveTo(192,135);
lienzo.lineTo(215,155);
lienzo.lineTo(192,155);


    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);