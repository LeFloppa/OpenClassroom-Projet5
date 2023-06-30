const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Flèches
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

// Sélection des éléments du slider
const slider = document.querySelector("#banner");
const bannerImg = slider.querySelector(".banner-img");
const tagLine = slider.querySelector("p");

// Test des event listeners
arrow_left.addEventListener('click', function() {
	console.log('Flèche gauche cliquée')
});

arrow_right.addEventListener('click', function() {
	console.log('Flèche droite cliquée')
});

// Bullet points
const dotsContainer = slider.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

// Fonction de mise à jour de l'affichage du slider

let currentSlide = 0;

function updateSlider() {
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[currentSlide].classList.add("dot_selected");

	bannerImg.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide].image);
	tagLine.innerHTML = slides[currentSlide].tagLine;
}

//Event Listeners sur les flèches pour modifier le slide au clic
arrow_right.addEventListener("click", function() {
	currentSlide++;
	updateSlider();
});

arrow_left.addEventListener("click", function() {
  currentSlide--;
  updateSlider();
});