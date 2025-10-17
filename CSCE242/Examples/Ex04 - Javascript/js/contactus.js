document.getElementById("contact-form").onsumbit = (event) => {
    event.preventDefault();
    //console.log("done");

    const result = document.getElementById("contact-result");
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: json
         })
         .then(async (response) => {
             let json = await response.json();
            if (response.status == 200) {
                 result.innerHTML = "Your message has been sent!";
             } else {
                 console.log(response);
                 result.innerHTML = json.message;
             }
         })
         .catch(error => {
             console.log(error);
             result.innerHTML = "Something went wrong!";
         })
         .then(function() {
             form.reset();
            setTimeout(() => {
                 result.style.display = "none";
             }, 3000);
         });

    console.log(json);
};
 form.addEventListener('submit', function(e) {
   e.preventDefault();
   const formData = new FormData(form);
   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);
   result.innerHTML = "Please wait..."

     fetch('https://api.web3forms.com/submit', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: json
         })
         .then(async (response) => {
             let json = await response.json();
             if (response.status == 200) {
                 result.innerHTML = "Form submitted successfully";
             } else {
                 console.log(response);
                 result.innerHTML = json.message;
             }
         })
         .catch(error => {
             console.log(error);
             result.innerHTML = "Something went wrong!";
         })
         .then(function() {
             form.reset();
             setTimeout(() => {
                 result.style.display = "none";
             }, 3000);
         });
});