let btn1 = document.getElementById("nav-btn")
let btn2 = document.getElementById("GButton1")
let btn3 = document.getElementById("DButton1")
let btn4 = document.getElementById("ViewBTN")
let btn5 = document.getElementById("WebDesign")
let btn6 = document.getElementById("CloseBTN1")
let btn7 = document.getElementById("CloseBTN2")
let btn10 = document.getElementById("Python")
let btn8 = document.getElementById("CloseBTN11")
let btn9 = document.getElementById("CloseBTN22")
let btn11 = document.getElementById("JavaScript")
let btn12 = document.getElementById("CloseBTN111")
let btn13 = document.getElementById("CloseBTN222")


if(btn1) {
    btn1.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode")
        document.body.classList.toggle("nav-btn-edit")
        if(document.body.classList.contains("dark-mode")){
            btn1.innerHTML = "<i class='fa-regular fa-sun'></i>"
        }
        else
        {
            btn1.innerHTML = "<i class='fa-solid fa-moon'></i>"
        }
    })
}

let loadingScreen = document.getElementById("loading-screen");
if(loadingScreen) {
    setTimeout(function () {
        loadingScreen.classList.add("hide");
    }, 2000);
}

if(btn2) {
    btn2.addEventListener("click", function(){
        window.open("https://github.com", "_blank");
    })
}

if(btn3) {
    btn3.addEventListener("click", function(){
        window.open("https://github.io", "_blank");
    })
}

if(btn4) {
    btn4.addEventListener("click", function(){
        window.location.href = 'projects.html'
    })
}

let an = document.getElementById("SectionModal")
let ana = document.getElementById("SectionModal2")
let anan = document.getElementById("SectionModal3")
if(btn5) {
    btn5.addEventListener("click", function(){
        an.style.display = "block"
    })
}

if(btn6) {
    btn6.addEventListener("click", function(){
        an.style.display = "none"
    })
}

if(btn7) {
    btn7.addEventListener("click", function(){
        an.style.display = "none"
    })
}

if(btn10) {
    btn10.addEventListener("click", function(){
        ana.style.display = "block"
    })
}

if(btn8) {
    btn8.addEventListener("click", function(){
        ana.style.display = "none"
    })
}

if(btn9) {
    btn9.addEventListener("click", function(){
        ana.style.display = "none"
    })
}

if(btn11) {
    btn11.addEventListener("click", function(){
        anan.style.display = "block"
    })
}

if(btn12) {
    btn12.addEventListener("click", function(){
        anan.style.display = "none"
    })
}

if(btn13) {
    btn13.addEventListener("click", function(){
        anan.style.display = "none"
    })
}

