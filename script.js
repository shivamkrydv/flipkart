// let btnCategory = document.getElementsByClassName('btn-category')[0]
// let categories = document.getElementsByClassName('categories')[0]

// function categoryshow(){
//    const display = categories.style.display === ('flex') ? 'none' : 'flex';
//    categories.style.display = display;

// };

// btnCategory.onclick = categoryshow;

let hideSide = document.querySelector(".hidesidebar");
let showSide = document.querySelector(".mainhambar");
let mobSidebar = document.querySelector(".mobsidebar");
let main = document.querySelector("main");
const hideSidebar = () => {
    mobSidebar.style.display = 'none';
    main.style.filter = `none`
}
hideSide.onclick = hideSidebar;

const showSidebar = () => {
    mobSidebar.style.display = 'flex'
    main.style.filter = `blur(5px)`
}
showSide.onclick = showSidebar;




// pagination js
let pagination = document.querySelector(".pagination");
let slides = document.querySelectorAll(".slide");

let len = slides.length;

let prevbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");
let slideNumber = 1;


// const prevSlide = () =>{
//     if(slideNumber>1){
//         pagination.style.transform = `translateX(-${(slideNumber-2)*100}%)`;
//         slideNumber--;
//     }
//     else{
//         pagination.style.transform = `translateX(-${(len-1)*100}%)`;
//         slideNumber = len;
//     }
// }

let slidedashedbox = document.querySelector(".slidedashedbox");
let dashedover = document.querySelector(".dashedover");
let dashedleft = 17;

const prevSlide = () => {
    dashedover.style.left = `${(slideNumber-2) * dashedleft}px`;
    pagination.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
    slideNumber--;
}

const getlastslide = () => {
    dashedover.style.left = `${(len-1) * dashedleft}px`;
    pagination.style.transform = `translateX(-${(len - 1) * 100}%)`;
    slideNumber = len;
}


prevbtn.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getlastslide();
})

const getfirstslide = () => {
    dashedover.style.left = `0px`;
    pagination.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
const nextSlide = () => {
    dashedover.style.left = `${slideNumber * dashedleft}px`;
    pagination.style.transform = `translateX(-${slideNumber * 100}%)`;
    slideNumber++;

}
// nextbtn.addEventListener('click',()=>{
//     if(slideNumber<len){
//         nextSlide();
//     }
//     else{
//         getfirstslide();
//     }
// })
nextbtn.addEventListener('click', () => {
    slideNumber < len ? nextSlide() : getfirstslide();
    // nextbtn.style.background = "#fff0";
})

function slideloop() {
    slideNumber < len ? nextSlide() : getfirstslide();
    setTimeout(slideloop, 4000);

}

slideloop();



// end pagination js


// best of electronics js

let prevnextelectronics = document.querySelector('.prevnextelectronics');
let belectronicsItem = document.querySelector(".B-electronics-items");

let prevelectronics = document.querySelector(".prevelectronics")
let nextelectronics = document.querySelector(".nextelectronics")


const prevelectronicsfunc = () => {
    if (X > 6) {
        belectronicsItem.style.transform = `translateX(-400px)`
        X = 4;
        nextelectronics.style.display = `flex`;
    }
    else {
        belectronicsItem.style.transform = `translateX(0px)`
        nextelectronics.style.display = `flex`;
        X = 2;
        prevelectronics.style.display = `none`;
        prevnextelectronics.style.justifyContent = "flex-end";

    }
}
prevelectronics.addEventListener('click', prevelectronicsfunc);

let X = 1;

const nextelectronicsfunc = () => {
    if (X < 10) {
        if (X >= 2) {
            prevelectronics.style.display = `flex`;
            prevnextelectronics.style.justifyContent = `space-between`

        }
        belectronicsItem.style.transform = `translateX(-${X * 150}px)`;
        X += 1;
    }
    else {
        nextelectronics.style.display = `flex`;
        setTimeout(belectronicsItem.style.transform = `translateX(0px)`, 2000);
        X = 1;
    }
    setTimeout(nextelectronicsfunc, 4000);
};

setTimeout(nextelectronicsfunc, 4000);

nextelectronics.addEventListener('click', nextelectronicsfunc);

// end best of electronics js

// beauty food js

let rArrow = document.querySelectorAll(".rArrow");
let beautyfoodend = document.querySelectorAll(".beautyfoodend");

let beautyfoodendLasti = document.querySelectorAll(".beautyfoodend-lasti");
let moving = 1;

rArrow[0].addEventListener('click', () => {
    if(moving<10){
        beautyfoodend[0].style.transform = `translate(-${moving*200}px)`;
        moving++;
        console.log("arrow 2");
    }
    else{
        beautyfoodend[0].style.transform = `translate(0px)`;
        moving = 1;        

    }
})
rArrow[0].addEventListener('dblclick', () => {
        beautyfoodend[0].style.transform = `translate(0px)`;
        moving = 1;
})

beautyfoodendLasti[0].addEventListener('click', () => {
        beautyfoodend[0].style.transform = `translate(0px)`;
        moving = 1;
})
rArrow[1].addEventListener('dblclick', () => {
        beautyfoodend[1].style.transform = `translate(0px)`;
        moving = 1;
})
rArrow[1].addEventListener('click', () => {
    if(moving<10){
        beautyfoodend[1].style.transform = `translate(-${moving*200}px)`;
        moving++;
        // console.log("arrow 2");
    }
    else{
        beautyfoodend[1].style.transform = `translate(0px)`;
        moving = 1;        

    }
})

rArrow[1].addEventListener('dblclick', () => {
        beautyfoodend[1].style.transform = `translate(0px)`;
        moving = 1;
})

beautyfoodendLasti[1].addEventListener('click', () => {
        beautyfoodend[1].style.transform = `translate(0px)`;
        moving = 1;
})
