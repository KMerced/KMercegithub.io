//Takes 2 parameters:
//1st is one you'll call every so often, 2nd defines how often
setInterval(()=>{
    //console.log("slideshow");
    const currentSlide = document.querySelector("#slideshow img:not(.hidden)");
    //Moves to the next slide, which would be the next sibling
    let nextSlide = currentSlide.nextElementSibling;

    //If the next slide doesn't exist, then wrap back around to the first slide
    if(!nextSlide) {
        nextSlide = document.querySelector("#slideshow img:first-child");
    }
    
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
},1000);
