
// program to print dynamic text 15 times.
let dynamicScrollTxt = document.querySelector(".scroll-in");

let clutter = "";

for (let i = 0; i < 15; i++) {
  clutter += `<span>TOPTRACER RANGE</span>
             <span>GOLF LESSONS</span>
             <span>ADVENTURE GOLF</span>
             <span>COFFEE SHOP</span>
             <span>LEAGUES</span>`;
}

dynamicScrollTxt.innerHTML = clutter;





// vanilla tilt Js library for Cards
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400
});



// cursor circle to follow the pointer.
let cursor = document.querySelector(".crsrCrcl");
let canvas = document.querySelector(".canvas")


canvas.addEventListener("mousemove" ,function(dets){
    cursor.style.display = "block"
    cursor.style.left = +dets.x+"px";
    cursor.style.top = (window.scrollY+dets.y)+"px";
})

canvas.addEventListener("mouseleave", function(){
    cursor.style.display = "none"
})




// page down arrow on main section

let borderArrow = document.querySelector(".borderAroundArr");
let arrow = document.querySelector(".ri-arrow-down-line");
arrow.style.cursor = "pointer";

borderArrow.addEventListener("mouseenter", function(){
    borderArrow.style.transform = "scale(0.5)"
    borderArrow.style.border = "none"
    borderArrow.style.backgroundColor = "rgb(170, 255, 0)"
    borderArrow.style.transition = "all 0.5s linear "
    borderArrow.style.fontSize = "72px"
    arrow.style.color = "black";
})


borderArrow.addEventListener("mouseleave", function(){
    borderArrow.style.transform = "scale(1)"
    borderArrow.style.border = "2px solid rgb(170, 255, 0)"
    borderArrow.style.backgroundColor = "rgb(170, 255, 0, 0)"
    borderArrow.style.fontSize = "36px"
    arrow.style.color = "white"
    
})

arrow.addEventListener("click", function(){
    scrollToSmoothly(0, 3600, 500);
});
borderArrow.addEventListener("click", function() {
    scrollToSmoothly(0, 3600, 500);
});

function scrollToSmoothly(x, y, duration) {
    const startingY = window.scrollY;
    const diff = y - startingY;
    let start;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(x, startingY + (diff * progress) / duration);

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}




// cursor Change on nav bar

let navItems = document.querySelectorAll(".navItems");

navItems.forEach(function(elem){
    elem.style.cursor = "pointer";
    elem.addEventListener("mouseenter", function(){
        cursor.style.height = "60px"
        cursor.style.width = "60px"
        cursor.style.border = "3px solid white";
        cursor.style.backgroundColor = "rgba(191, 255, 0, 0.180)"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.height = "20px"
        cursor.style.width = "20px"
        cursor.style.border = "none";
        cursor.style.backgroundColor = "yellowgreen"
    })
})





// Coffee Shop

let coffeeShopBtn = document.querySelector(".coffeeShopBtn");

coffeeShopBtn.addEventListener("mouseenter", function(){
    coffeeShopBtn.style.backgroundColor = "rgb(170, 255, 0)"
    coffeeShopBtn.style.color = "rgb(0, 0, 0)"
    coffeeShopBtn.style.transform = "scale(1.3)"
    coffeeShopBtn.style.transition = "all 0.3s linear"
    coffeeShopBtn.style.cursor = "pointer"
})

coffeeShopBtn.addEventListener("mouseleave", function(){
    coffeeShopBtn.style.backgroundColor = "rgb(170, 255, 0, 0)"
    coffeeShopBtn.style.color = "rgb(255, 255, 255)"
    coffeeShopBtn.style.transform = "scale(1)"
})





// food drink image animation.
let imagesARR =[
    {url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
    {url: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

] 

let imagePanel = document.querySelector(".imagePanel");
let imageChngBtnOut = document.querySelectorAll(".imgChngBtns .btn");
let imageChngBtn = document.querySelectorAll(".btnInn");
imagePanel.innerHTML = `<img src="${imagesARR[0].url}" alt="">`


function imageTransition(){
    
    let sno = 0;
    let photoChange = setInterval(function(){
        if(sno<3){
                imagePanel.innerHTML = `<img src="${imagesARR[sno].url}" alt="">`;

            sno++;
    }
    else{
            clearInterval(photoChange);
        imageTransition();
    }
}, 5000)
}


imageTransition();



imageChngBtn.forEach(function(elem, idx){
    elem.addEventListener("click", function(){
        imagePanel.innerHTML = `<img src="${imagesARR[idx].url}" alt="">`
    });
    elem.addEventListener("mouseenter", function(){
        imageChngBtnOut[idx].style.border = "3px solid rgb(119, 165, 27)";
        cursor.style.opacity = "0";
    })
    elem.addEventListener("mouseleave", function(){
        imageChngBtnOut[idx].style.border = "none";
        cursor.style.opacity = "1";
    })
});

imageChngBtnOut.forEach(function(elem, idx){
    elem.addEventListener("click", function(){
        imagePanel.innerHTML = `<img src="${imagesARR[idx].url}" alt="">`
    });
    elem.addEventListener("mouseenter", function(){
        imageChngBtnOut[idx].style.border = "3px solid rgb(119, 165, 27)";
        cursor.style.opacity = "0";
    })
    elem.addEventListener("mouseleave", function(){
        imageChngBtnOut[idx].style.border = "none";
        cursor.style.opacity = "1";
    })
});









// dynamic card

let cardArrow = document.querySelectorAll(".card-arrow")


cardArrow.forEach(function(elem){
    elem.style.cursor = "pointer"
});
document.querySelectorAll(".ri-arrow-right-line").forEach(function(elem){
    elem.style.cursor = "pointer";
});



// Quote mark interaction
let quoteMark = document.querySelectorAll(".quoteMark img");


window.addEventListener("scroll", function(){
    if(window.scrollY > 2630){
        quoteMark.forEach(function(elem){
            elem.style.transform = "scale(1)";
            elem.style.animation = "smoothShake 1.2s infinite ease-in-out";
            
        });
    }
    else{
        quoteMark.forEach(function(elem){
            elem.style.transform = "scale(0.5)";
            elem.style.animation = "none";
        });
    }
})





// background text pop-up

let bgTxt = document.querySelector(".bg-text");

window.addEventListener("scroll", function(){
    if(window.scrollY > 3300){
        bgTxt.style.top = "50px"
        bgTxt.style.transition = "all 0.4s linear"
    }
    else{
        bgTxt.style.top = "80px"
    }
});




// toggle nav bar appear
let toggleNav = document.querySelector(".toggle-nav");

window.addEventListener("scroll", function(){
    if(window.scrollY > 400 & window.scrollY < 3300){
        toggleNav.style.top = "20px"
    }
    else{
        toggleNav.style.top = "-100px"
    }
});

toggleNav.addEventListener("mouseenter", function(){
    cursor.style.opacity = "0";
})
toggleNav.addEventListener("mouseleave", function(){
    cursor.style.opacity = "1";
})


// scroll bar
let pageHeight = canvas.getBoundingClientRect().height;
let scrll = document.querySelector(".scroll-y").getBoundingClientRect().height;
let scrllBar = document.querySelector(".scroll-bar");



window.addEventListener("scroll", function(){
    scrllBar.style.top = `${gsap.utils.mapRange(0, pageHeight, 0, scrll+15, window.scrollY)}px`;
})




let quoteArr = [
    {quote: "Golf is a game of precision, patience, and passion. Let our clubs elevate your experience on the green"},
    {quote: "Embark on a golfing journey where each swing is a symphony of skill, guided by the finesse of our meticulously crafted clubs - because greatness demands the finest instruments."},
    {quote: "In the vast landscape of the fairway, our golf clubs stand tall as the architects of victory, sculpting precision and power into every stroke. Unleash the extraordinary on the green."},
    {quote: "Beyond the greens lies a realm where determination meets craftsmanship, and victory is sculpted from passion. Our golf clubs: not mere tools, but the conduits of your golfing destiny"},
    {quote: "Unleash your potential with the perfect swing. Our golf clubs are the key to unlocking your best game."},
    {quote: "Experience the grandeur of golfing excellence, where our clubs emerge as the towering pillars of precision, transforming the ordinary into the extraordinary with every swing."},
    {quote: "Elevate your game to monumental heights with our golf clubs - the epitome of sporting artistry, where every stroke is a brushstroke, painting the canvas of your golfing legacy."},
    {quote: "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven't been."}
]

let quoteContent = document.querySelector(".quote");

quoteContent.innerHTML = "Golf is a game of precision, patience, and passion. Let our clubs elevate your experience on the green"


setInterval(function(){
    let randomNum = Math.floor(Math.random()*8);
    quoteContent.innerHTML = quoteArr[randomNum].quote;



}, 10000)





// turn Off video after someTime
let video  = document.querySelector(".mainSec video");


window.addEventListener("scroll", function(){
    if(window.scrollY > 630){
        video.style.display = "none"
    }
    else{
        video.style.display = "block"
    }
});
