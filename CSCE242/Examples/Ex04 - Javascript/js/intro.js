//When the button is clicked, call this function
    //const sayHello = () => {
    //console.log("Hello World!");
    //}

    //Putting () at the end of a call makes it call the function right away. Don't do this unless you intend for that.
    //document.getElementById("btn-click-me").onclick = sayHello;

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World!";
    event.currentTarget.classList.add("clicked");
    
    //Tells you what provoked the event (in this case the button)
    //console.log(event.currentTarget);
}

document.getElementById("happy-button").onclick = (event) => {
    document.getElementById("happy-message").innerHTML = "Yay!";
    event.currentTarget.classList.add("clicked-on-happy");
}

document.getElementById("sad-button").onclick = (event) => {
    //const pFeeling = document.getElementById("p-feeling");
    document.getElementById("sad-message").innerHTML = "Nay.";
    event.currentTarget.classList.add("clicked-on-sad");
}

document.getElementById("clear-stuff").onclick = (event) => {
    event.currentTarget.classList.remove("clicked-on-happy");
    event.currentTarget.classList.remove("sad-message");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    //console.log(userInput);
    document.getElementById("p-emotion").innerHTML = `You are feeling: ${userInput}`;
    document.getElementById("img-emotion").classList.remove("hidden");
}

document.getElementById("color-button").onclick = (event) => {
    const color = document.getElementById("txt-color").value.trim().toLowerCase(); //trim removes all whtie spaces. toLowerCase makes it case insensitive
    const p = document.getElementById("show-color");
    const error = document.getElementById("error-color");
    let mood = "";
    p.innerHTML = ""; //reset paragraph

    //Reset the error
    error.innerHTML = "";
    
    if(color == "") {
        error.innerHTML = "* error";
        return;
    }
    
    if (color == "red") {
        //p.innerHTML = "You are very angry."
        mood = "angry";
    } else if(color == "blue") {
       // p.innerHTML = "You are very sad."
       mood = "sad"
    } else if(color == "yellow") {
        //p.innerHTML = "You are very happy."
        mood = "happy"
    }
   
    if (mood == "") {
        error.innerHTML = "* Invalid color";
        return;
    }

    p.innerHTML = `You chose ${color}. so you're feeling ${mood}.`;
}

document.getElementById("ball-button").onclick = (event) => {
    const ball = document.getElementById("ball");

    if(ball.classList.contains("bounce")) {
        event.currentTarget("Start animation");
    } else {
        event.currentTarget.innerHTML = "Stop animation";
    }

    ball.classList.add("bounce");
}

let counter = 0;
let counterInterval;
const countP = document.getElementById("counting");
const disableStart = document.getElementById("counter-button-start");
const disableStop = document.getElementById("counter-button-stop");
document.getElementById("counter-button-start").onclick = () => {
    //console.log("Start");
    disableStart.disabled = true;
    disableStop.disabled = false;
    counterInterval = setInterval(()=>{counter++; countP.innerHTML = counter;}, 1000); //every 1k milisecs, do what's in the {}

}
disableStop.disabled = true;
document.getElementById("counter-button-stop").onclick = () => {
    //console.log("Stop");
    disableStart.enabled = false;
    clearInterval(counterInterval);
}

const goal = 10000
document.getElementById("money-goal").innerHTML = goal;
document.getElementById("donation-button").onclick = () => {
    //console.log("Donated!");
    const donation = document.getElementById("txt-donation").value;
    const error = document.getElementById("donation-error");
    error.innerHTML = "";
    const donationMessage = document.getElementById("goal-message");
    donationMessage.innerHTML = "";

    if(isNaN(donation) || donation <= 0) {
        error.innerHTML = "*Donations must be more than 0.";
        return;
    }

    const donationProgress = donation/goal*100;
    if(donationProgress >= 100) {
        donationMessage.innerHTML = "Goal reached!";
    }else if(donationProgress >= 80) {
        donationMessage.innerHTML = "Nearly there!";
    }else if(donationProgress >= 50) {
        donationMessage.innerHTML = "Half way there!";
    }else if(donationProgress >= 25) {
        donationMessage.innerHTML = "Keep going!";
    }else {
        donationMessage.innerHTML = "Let's get started!";
    }

    //Takes something from css to change it dynamically
    document.querySelector(":root").style.setProperty("--donation-percent", donationProgress + "%");
}