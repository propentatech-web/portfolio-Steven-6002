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