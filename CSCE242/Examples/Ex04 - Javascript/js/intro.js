/*When the button is clicked, call this function*/
    /*const sayHello = () => {
    console.log("Hello World!");
    }*/

    /*Putting () at the end of a call makes it call the function right away. Don't do this unless you intend for that.*/
    /*document.getElementById("btn-click-me").onclick = sayHello;*/

document.getElementById("btn-click-me").onclick = () => {
    console.log("Hello World!");
}

