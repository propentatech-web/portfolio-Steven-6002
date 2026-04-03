const text = "I don't code. I architect solutions."
let index = 0
function typeEffect (){
    if (index < text.length){
        document.getElementById("text")
        .innerHTML += text.charAt(index);
        index++
        setTimeout(typeEffect, 200);// vitesse d'ecriture
    }
}
typeEffect ()
const zoomElements =
document.querySelectorAll(".zoom-scroll")
function zoomOnScroll(){
    zoomElements.for( el => {
        const rect =
        el.getBoundineClientRect()

        if ( rect.top < window.innerHeight -100)
        {
            el.classList.add("active")
        }
    })
}
window.addEventListener("scroll",zoomOnScroll)