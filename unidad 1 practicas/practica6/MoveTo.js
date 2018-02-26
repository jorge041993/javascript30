function iniciar (){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.beginPath();//establecemos la posicion inicial del lapiz
    //comoenza con trazo
    lienzo.moveTo(100, 100);//se mueve el lapiz a 100, 100
    //genera una linea desde 100, 100 hasta 200, 200
    lienzo.lineTo(200, 200);
    
    lienzo.lineTo(100, 200);
    lienzo.clip();
    
    lienzo.beginPath();



    for(i=0; i<300; i=i+10){
        lienzo.moveTo(0,i);
        lienzo.lineTo(500,i)
    }
    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);