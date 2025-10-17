document.getElementById("contact-form").onsubmit = (event) => {
    event.preventDefault();

    const result = document.getElementById("contact-result");
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    //Had to add this const because form was never actually defined in the code
    const form = document.getElementById("contact-form");
    const resultMessage = document.createElement("p");
    resultMessage.innerHTML = "Please wait while your email address is being submitted...";

    //This is going to send the email address to myself
    fetch('https://api.web3forms.com/submit', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: json
         })
         //If it can get a proper response from the web3forms server, then inform the user they're on the system
         .then(async (response) => {
             let json = await response.json();
            if (response.status == 200) {
                 resultMessage.innerHTML = "You have successfully subscribed to the Ducky Alerts System!";
             } else {
                 console.log(response);
                 result.innerHTML = json.message;
             }
         })
         //If it can't then give an error and do nothing
         .catch(error => {
             console.log(error);
             resultMessage.innerHTML = "Looks like something went wrong, please try again later.";
         })
         //Regardless of that happens, clear everything out
         .then(function() {
             form.reset();
            setTimeout(() => {
                 result.style.display = "none";
             }, 3000);
         });

    //console.log(json);

    result.append(resultMessage);
};