// Automatic Slideshow - cambia la imagen cada X segundos
const carousel = () => {
    let x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}

// Alternar el menú en pantallas pequeñas al hacer clic en el botón de menú
const myFunction = () => {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo
let modal = document.getElementById('ticketModal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let myIndex = 0;
carousel();