//rezolvare alternativa pentru schimbare de style la hover/click
/**
 * getElementById -> Ia un element dupa ID (intoarce un sigur element pentru ca id-ul este unic)
 * getElementByTagName -> Intoarce un array de elemente cu tag-ul specificat
 * elementele intoarse au toate proprietatile de care avem nevoie (style, child, etc) si le putem manipula dinamic din JavaScript
 */
function changeDirection () {
    var container = document.getElementById("coloane");
    if(container.style.flexDirection === "row-reverse") {
        container.style.flexDirection = "row"
    } else {
        container.style.flexDirection = "row-reverse";
    }
}

function changeOrder() {
    var sections = document.getElementsByTagName("section");
    console.log(sections);
    sections[2].style.order = 1;
    sections[0].style.order = 2;
    sections[1].style.order = 3;
    sections[3].style.order = 4;
}

function changeImg() {
    var section = document.getElementById("imagini");
    let index = 5;
    section.childNodes.forEach((child) => {
        if(child.tagName === "IMG") {
            child.style.order = index;
            child.style.alignSelf = "flex-start";
            index --;
        }
    })
}

function reInit() {
    var section = document.getElementById("imagini");
    let index = 1;
    section.childNodes.forEach((child) => {
        if(child.tagName === "IMG") {
            child.style.order = index;
            child.style.alignSelf = "flex-end";
            index ++;
        }
    })
}


