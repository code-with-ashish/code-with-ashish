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
        navLi = document.querySelectorAll(".dropdown-menu a");
    }
    const baseUrl1 = (window.location.href).split('#')[0];
    const baseUrl = (window.location.href).split('#')[0].slice(0,baseUrl1.length-1);

    let anchorPoints = [];

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        //console.log(section.offsetTop, document.documentElement.scrollTop);
        anchorPoints.push({
            id: section.getAttribute("id"),
            top: sectionTop
        });
    });
    console.log(anchorPoints);

    window.onscroll = () => {
        let current = "";

       anchorPoints.forEach((anchorPoint, index) => {
        if (document.documentElement.scrollTop+200 >= anchorPoint.top && document.documentElement.scrollTop < anchorPoints[index+1].top) {
            current = anchorPoints[index].id;
            }
        });
    
        navLi.forEach((a) => {
        // console.log(sections,current)

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