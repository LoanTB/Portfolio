document.getElementById("contenu").addEventListener("mouseover", (event) => {
    let div = document.getElementById("filtre");
    div.classList.add('active');
    let video = document.getElementById("video");
    video.classList.add('active');
});
document.getElementById("contenu").addEventListener("mouseout", (event) => {
    let div = document.getElementById("filtre");
    div.classList.remove('active');
    let video = document.getElementById("video");
    video.classList.remove('active');
});



var menu = document.getElementById("monMenu");
var ouvrir = document.getElementById("ouvrir");
var fermer = document.getElementById("fermer");

ouvrir.onclick = openNav;
fermer.onclick = closeNav;

function openNav() {
    menu.classList.add("active");
}

function closeNav() {
    menu.classList.remove("active");
}
