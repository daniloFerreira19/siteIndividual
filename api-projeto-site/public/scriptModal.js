//Código do pop up (modal) 

let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("registerButton");
let modalContainer = document.querySelector(".modalContainer");
let registerModal = document.querySelector(".registerModalContainer");
let closeLogin = document.querySelector(".closeModal");
let closeRegister = document.querySelector(".closeRegister");
let telaInicio = document.getElementById("homeButton");
let pageTitle = document.querySelector("title")

loginButton.addEventListener("click", function(){
    modalContainer.classList.add("containerActive");
})

closeLogin.addEventListener("click", function(){
    modalContainer.classList.remove("containerActive");
    loginButton.classList.remove("current");
    telaInicio.classList.add("current");
    pageTitle.innerHTML = "GoT | Home";
})

registerButton.addEventListener("click", function() {
    registerModal.classList.add("registerActive");
})

closeRegister.addEventListener("click", function(){
    registerModal.classList.remove("registerActive");
    registerButton.classList.remove("current");
    telaInicio.classList.add("current");
    pageTitle.innerHTML = "GoT | Home";
})



