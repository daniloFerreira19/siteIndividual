const carouselSlide = document.querySelector(".carouselSlide");
const carouselImages = document.querySelectorAll(".carouselSlide img");

const prevButton = document.getElementById("buttonPrev");
const nextButton = document.getElementById("buttonNext");

let i = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * i) + "px)";

nextButton.addEventListener("click", () => {
    if (i >= carouselImages.length - 1) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    i++;
    carouselSlide.style.transform = "translateX(" + (-size * i) + "px)";
})

prevButton.addEventListener("click", () => {
    if (i <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    i--;
    carouselSlide.style.transform = "translateX(" + (-size * i) + "px)";
})

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[i].id == "lastClone") {
        carouselSlide.style.transition = "none";
        i = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * i) + "px)";
    }
    if (carouselImages[i].id == "firstClone") {
        carouselSlide.style.transition = "none";
        i = carouselImages.length - i;
        carouselSlide.style.transform = "translateX(" + (-size * i) + "px)";
    }
})