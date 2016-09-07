window.addEventListener("load", function() {
    var boton = document.getElementById("cambiar");
    boton.addEventListener("click", function() {
        var segundos = parseFloat(document.getElementById("segundos").value);
        setInterval(cambiarColor, segundos*1000)
    });
        function cambiarColor(){
 document.body.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);};
});

