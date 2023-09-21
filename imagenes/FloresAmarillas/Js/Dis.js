document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})
function mostrarDiv(id) {
            // Ocultar todos los divs
            var divs = document.querySelectorAll('.contenedor');
            divs.forEach(function(div) {
                div.classList.remove('activo');
            });

            // Mostrar el div deseado
            var div = document.getElementById(id);
            div.classList.add('activo');
        }