const getDucks = async() => {
    const url = "https://kmerced.github.io/KMercegithub.io/CSCE242/Projects/part7/json/ducks.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log("There was an error here: ");
    }
}

const showDucks = async () => {
    //Const to get the info
    const ducks = await getDucks();

    //Consts for all the duck info
    //W3 schools was a godsend to help with this stuff, learned from here: 
    //https://www.w3schools.com/jsref/prop_loc_search.asp

    //For future reference, what this window.location.search thing does is that it takes the "?name=" parameter from each of the urls and stores it for future use, like in the duckName method after it!
    const getStuff = window.location.search;
    //Learned about the replace method from here:
    //https://www.w3schools.com/jsref/jsref_replace.asp
    //For future reference what replace does is that it just takes out the "?name=" so that when the rest of the code tries to find the duck the person clicked, it won't be wrong and mess itself up
    const duckName = getStuff.replace("?name=", "")
    const duckerName = document.getElementById("duck_name")
    const img = document.getElementById("img");
    const duckBrand = document.getElementById("brand");
    const duckLine = document.getElementById("line");
    const duckDate = document.getElementById("date");
    const story = document.getElementById("story-text");

    let duck = null;
    for(let i=0; i<ducks.length; i++) {
        if(ducks[i].name == duckName) {
            duck = ducks[i];
            break;
        }
    }

    //Stuff to add everything
    duckerName.innerHTML = duck.name;
    img.src = `../../json/images/${duck.img}`;
    duckBrand.innerHTML = `Brand: ${duck.brand}`;
    duckLine.innerHTML = `Line: ${duck.line}`;
    duckDate.innerHTML = `Date Obtained: ${duck.date}`;
    story.innerHTML = duck.story;

}

showDucks();