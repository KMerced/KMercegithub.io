//Consts
const beforeDogs = [];
//Credit: https://www.reddit.com/r/BeforeNAfterAdoption/comments/iremzx/my_foster_dogs_2_month_glow_up/?utm_source=embedv2&utm_medium=post_embed&embed_host_url=https://www.buzzfeed.com/shelbyheinrich/dog-adoption-before-and-after-reddit
    beforeDogs["Gardenia"] = "../images/dog1before.png";
    //Credit: https://www.boredpanda.com/before-after-adoption-rescued-dogs-pictures/
    beforeDogs["Kaze"] = "../images/dog2before.png";
    //Credit: https://www.facebook.com/TrioAnimalFoundation/photos/a.10150992226849955.1073742006.71480294954/10150992227224955/?type=3&theater
    beforeDogs["Holland"] = "../images/dog3before.png";
    //Credit: https://imgur.com/night-we-found-him-on-street-vs-1-week-after-adoption-reddit-meet-pablo-UFm5fih
    beforeDogs["Pablo"] = "../images/dog4before.png";
const afterDogs = [];
//Credit: https://www.reddit.com/r/BeforeNAfterAdoption/comments/iremzx/my_foster_dogs_2_month_glow_up/?utm_source=embedv2&utm_medium=post_embed&embed_host_url=https://www.buzzfeed.com/shelbyheinrich/dog-adoption-before-and-after-reddit
    afterDogs["Gardenia"] = "../images/dog1after.png";
    //Credit: https://www.boredpanda.com/before-after-adoption-rescued-dogs-pictures/
    afterDogs["Kaze"] = "../images/dog2after.png";
    //Credit: https://www.facebook.com/TrioAnimalFoundation/photos/a.10150992226849955.1073742006.71480294954/10150992227224955/?type=3&theater
    afterDogs["Holland"] = "../images/dog3after.png";
    //Credit: https://imgur.com/night-we-found-him-on-street-vs-1-week-after-adoption-reddit-meet-pablo-UFm5fih
    afterDogs["Pablo"] = "../images/dog4after.png";
const dogs = document.getElementById("dogs");

//Loop through the arrays to show before pics
for (let name in beforeDogs) {
    const dogSection = document.createElement("div");
    dogSection.classList.add("dog-section");
   
  //Images
  const img = document.createElement("img");
  img.src = beforeDogs[name];
  
   
  //"Please adopt" overlay
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = `Please adopt ${name}`;

  dogSection.append(img);
  dogSection.append(overlay);
  dogs.append(dogSection);

  //Show the popup when the image is clicked
  img.onclick = (event) => {
    //console.log("clicked!");

    //Stuff for popup
    const pop = document.getElementById("popup");
    pop.classList.remove("hidden");
    pop.innerHTML = "";

    //Stuff for the title
    const title = document.createElement("h2");
    title.innerHTML = `${name} after adoption`;
    pop.append(title);

    //Stuff for the after adoption image
    const img2 = document.createElement("img");
    img2.src = afterDogs[name];
    pop.append(img2);


    //Remove popup when close button is clicked
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = "Close";
    pop.append(button);
    button.onclick = (event) => {
        pop.classList.add("hidden");
    }

};
}
