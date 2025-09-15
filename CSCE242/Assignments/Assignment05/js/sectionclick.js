
/* Sunny Days Section */
document.getElementById("sunny").onclick = (event) => {
    document.getElementById("beatles-song1").innerHTML = "Here comes the sun";
    document.getElementById("beatles-song2").innerHTML = "Sun";
    document.getElementById("beatles-song3").innerHTML = "Sun";
    document.getElementById("beatles-song4").innerHTML = "Sun";
    document.getElementById("beatles-song5").innerHTML = "Here it comes";
}

/* Color Picker Section */
document.getElementById("color-button").onclick = (event) => {
    const colorButton = document.getElementById("color-button");
    const colorInput = document.getElementById("colorInput");
    const pickedColor = document.getElementById("picked-color");

    colorButton.onclick = () => {
        colorInput.click();
    };

    colorInput.oninput = () => {
        const color = colorInput.value;
        pickedColor.innerHTML = `The color you chose was: ${color}`;
        pickedColor.style.color = color;
    };

}