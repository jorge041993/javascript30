function iniciar(){
     
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');

    var gradiente = lienzo.createLinearGradient(0,0,10,100);

    gradiente.addColorStop(0.5, '#000FF');
    gradiente.addColorStop(1, '#000000');

    lienzo.fillStyle=gradiente;



   /* lienzo.fillRect="#00099";
    lienzo.stroKeRect="rgba(255,0,45,0.9)";

    lienzo.globalAlpha="0.9";*/

    lienzo.fillRect(100,100,120,120);
    lienzo.fillRect(170,20,200,100);
   /* lienzo.clearRect(120,120,80,80);*/
}
window.addEventListener("load", iniciar, false);