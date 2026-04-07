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
//const about = ` i'm Steven. I don't follow rules ,i rewrite them. 
    //        Code, design and logic , they all bend to me.
  //           Ordinary fears me.Exception waits for me.`
//let indexs = 0
//function typeEffect (){
    //if (indexs < text.length){
        //document.getElementById("about")
        //.innerHTML += text.charAt(indexs);
      //  indexs++
    //    setTimeout(typeEffect, 200);// vitesse d'ecriture
  //  }
//}
typeEffect ()
const zoomElements =
document.querySelectorAll(".zoom-scroll")
function zoomOnScroll(){
    zoomElements.forEach( el => {
        const rect =
        el.getBoundineClientRect()

        if ( rect.top < window.innerHeight -100)
        {
            el.classList.add("active")
        }
    })
}
window.addEventListener("scroll",zoomOnScroll)


function showSection(id){
    let sections =
    Document.querySelectorAll(".section");

    sections.forEach(section =>{
        section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}
function showFade(){
    document.querySelectorAll(".fade").forEach
    (el => {
        el.classList.add("show");
    });
}
function togglemenu(){
    document.getElementById("nav-links").classList
    .toggle("active")
}
document.getElementById("contactform")
.addEventListener("submit", function(e)
{ e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    document.getElementById("formMessage").
    innerText = `Merci ${name}, votre message a ete envoye !`;
    this.requestFullscreen();
})