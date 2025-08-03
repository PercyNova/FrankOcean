function myFunction1()
{   
    document.body.style.backgroundColor= "#616F39";
    const collection = document.getElementsByClassName("header");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "#FA7D09";
    }

    const head = document.getElementsByClassName("navbar");
    for (let o = 0; o < head.length; o++) {
    head[o].style.backgroundColor = "#FA7D09";
    }

    const fontw1 = document.getElementsByClassName("foq");
    for (let a = 0; a < fontw1.length; a++) {
    fontw1[a].style.fontFamily = "Cooper Black";
    }
} 

function myFunction2()
{   
    document.body.style.backgroundColor= "#FA7D09";
    const collection = document.getElementsByClassName("header");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "#EEEEEE";
    }

    const head = document.getElementsByClassName("navbar");
    for (let o = 0; o < head.length; o++) {
    head[o].style.backgroundColor = "#EEEEEE";
    }

    let fontw2 = document.getElementsByClassName("foq");
    
    for (let a = 0; a < fontw2.length; a++) {
    fontw2[a].style.fontFamily = "Cooper Black";
    }
}

function myFunction3()
{   
    document.body.style.backgroundColor= "#232931";
    const collection = document.getElementsByClassName("header");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "#3F4E4F";
    }

    const head = document.getElementsByClassName("navbar");
    for (let o = 0; o < head.length; o++) {
    head[o].style.backgroundColor = "#3F4E4F";
    }

    let fontw3 = document.getElementsByClassName("foq");
    
    for (let a = 0; a < fontw3.length; a++) {
    fontw3[a].style.fontFamily = "Neue Haas Grotesk Text";
    }
}

function myFunction4()
{   
    document.body.style.backgroundColor= "#A27B5C";
    const collection = document.getElementsByClassName("header");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "#EEEEEE";
    }

    const head = document.getElementsByClassName("navbar");
    for (let o = 0; o < head.length; o++) {
    head[o].style.backgroundColor = "#EEEEEE";
    }

    let fontw4 = document.getElementsByClassName("foq");
    
    for (let a = 0; a < fontw4.length; a++) {
    fontw4[a].style.fontFamily = "Croogla4F";
    fontw4[a].style.fontStyle = "italic";
    fontw4[a].style.fontWeight = "900";
    }
}

function bgChanger1() {
    if (this.scrollY > this.innerHeight / 0.48) {
        myFunction2()
    }
    
    else{
        myFunction1()
    }
}

function bgChanger2() {
    if (this.scrollY > this.innerHeight / 0.23) {
        myFunction3()
    }
    
    else{
        bgChanger1()
    }
}

function bgChanger3() {
    if (this.scrollY > this.innerHeight / 0.14) {
        myFunction4()
    }
    
    else{
        bgChanger2()
    }
}


window.addEventListener("scroll", bgChanger1)
window.addEventListener("scroll", bgChanger2)
window.addEventListener("scroll", bgChanger3)
