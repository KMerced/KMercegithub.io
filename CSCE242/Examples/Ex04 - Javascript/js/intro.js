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
