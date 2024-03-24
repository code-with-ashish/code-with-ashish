let items = document.getElementsByClassName('nav-link');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', setNavActive);
}

function setNavActive(e) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("active")) {
            items[i].classList.toggle("active")
        }
    }
    this.classList.add("active");
}


let screenWidth = screen.width;
let sections //= document.querySelectorAll("section");
let navLi //= document.querySelectorAll("#large-screen .nav-item a");

document.addEventListener('DOMContentLoaded', function() {
    if (screenWidth<992) {
        sections = document.querySelectorAll("[id*='tablet-screen'] section");
        navLi = document.querySelectorAll(".nav-item a");
    }
    else if (screenWidth>=992){
        sections = document.querySelectorAll("[id*='large-screen'] section");
        navLi = document.querySelectorAll(".nav-item a");
    }
    const baseUrl1 = (window.location.href).split('#')[0];
    const baseUrl = (window.location.href).split('#')[0].slice(0,baseUrl1.length-1);
    window.onscroll = () => {
        let current = "";
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffSet || document.documentElement.scrollTop >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });
    
        navLi.forEach((a) => {
        console.log(sections,current)

            a.classList.remove("active");
            if (a.attributes['href'].value === ('#' + current)) {
                if (a.classList.contains("active")) {
                    a.classList.toggle("active")
                }
                a.classList.add("active");
            }
        });
        if (!(window.location.href == baseUrl+'#'+current)) {
            window.history.pushState(current, current, baseUrl+'#'+current);
            console.log(window.location.href)
        }
    
    };
   
 }, false);