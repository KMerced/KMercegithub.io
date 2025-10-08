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
    const duckName = document.getElementById("duck_name");
    const img = document.getElementById("img");
    const duckBrand = document.getElementById("brand");
    const duckLine = document.getElementById("line");
    const duckDate = document.getElementById("date");
    const story = document.getElementById("story-text");

    //Stuff to add everything
    duckName.innerHTML = ducks.name;
    img.src = duckBrand.img;
    duckBrand.innerHTML = `Brand: ${ducks.brand}`;
    duckLine.innerHTML = `Line: ${ducks.line}`;
    duckDate.innerHTML = `Date Obtained: ${ducks.date}`;
    story.innerHTML = ducks.story;

}

showDucks();