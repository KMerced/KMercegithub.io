//Consts
const plant = document.getElementById("plant");
const clock =  document.getElementById("clock");

//Plant Section Consts
const wateringtime = document.getElementById("wateringtime");
const wateringmessage = document.getElementById("wateringmessage");
const daySlider = document.getElementById("dayslider");
const plantStates = document.getElementById("plantstates");

//Clock Section Consts
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();


//Plant Section
document.getElementById("exercise1").onclick = (event) => {
    plant.classList.remove("section");
    clock.classList.add("section");

    daySlider.addEventListener("input", (event) => {
        const days = parseInt(daySlider.value);
    
        wateringtime.innerHTML = `You haven't watered your plant in ${days} days.`;
        if(days >= 0 && days <= 2) {
        plantStates.src = '../images/healthyplant.jpg';
        wateringmessage.innerHTML = "Your plant is currently completely healthy!";
    } else if (days >=3 && days <= 5) {
        plantStates.src = '../images/needswaterplant.jpg';
        wateringmessage.innerHTML = "You should probably water it soon."
    } else if (days >= 6 && days <= 9) {
        plantStates.src = '../images/plantdying.jpg';
        wateringmessage.innerHTML = "Ok, you really need to water your plant soon.";
    } else {
        plantStates.src = '../images/deadplant.jpg';
        wateringmessage.innerHTML = "Your plant died."
    }
    });
}

//Clock Section
document.getElementById("exercise2").onclick = (event) => {
    clock.classList.remove("section");
    plant.classList.add("section");

    const time = `${hours}:${minutes}`;

    document.getElementById("time").innerHTML = time;
    
}

//Toggling Nav
document.getElementById("main-nav").onclick = () => {
    document.getElementById("exercises").classList.toggle("exercise-nav-show");
}