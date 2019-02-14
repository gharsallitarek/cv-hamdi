window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...
let deplacement =(window.scrollY /(document.body.offsetHeight - window.innerHeight))*100;

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
console.log(deplacement);
});


function myScroll() { // Définition de la fonction de scroll
	window.onclick = function printMousePos(event) {
	var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
    
    // Calculez ici la valeur de déplacement à efectuer lors du scroll
	let deplacement =(window.scrollY /(document.body.offsetHeight - window.innerHeight))*100;
    window.scroll(0, progress*26+deplacement*0.5) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}
}
