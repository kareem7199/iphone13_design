let list = document.getElementById("list")
let open = false;
let body = document.querySelector("body");
let mainMobile = document.getElementById("main_mobile")

function handleClick(x) {
    x.classList.toggle("open");
    open = !open;
    list.style.display = open? "flex": "none";
}

function mobileClick(el){
    mainMobile.src = el.src
}

function handleColor(color){
    body.style.backgroundColor = color;
    list.style.backgroundColor=color;
}