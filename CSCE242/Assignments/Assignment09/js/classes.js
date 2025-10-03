
//BIG PAINTING CLASS
class Painting {
    constructor(name, artist, image, framed) {
        this.name = name;
        this.image = image;
        this.artist = artist;
        this.framed = framed;
    }

    //Section to return the image and only the image
    get paintingSection() {
        return `
            <section>
                <img src="${this.image}"/>
            </section>
        `;
    }
};

//Const for the list of paintings that will show
const paintingList = document.getElementById("paintings");

//Array for all the paintings
const Paintings = [];
Paintings.push(new Painting("A Distinguished Member Of The Humane Society", "Edwin Landseer", "../images/ELPainting.png", "No"));
Paintings.push(new Painting("Terrier Dog Chasing Rabbit down Hole", "Robert Cleminson", "../images/RCTD-framed.jpeg", "Yes"));
Paintings.push(new Painting("Original Pet Memorial Painting","MovchunArtStudio", "../images/MASDOP.png", "No"));
Paintings.push(new Painting("Setters on Point","Thomas Blinks","../images/Thomas_Blinks-Setters on Point.jpg","No"));
Paintings.push(new Painting("Family Cares","William Henry Hamilton Trood","../images/WHHT_1_lg_l-3856112162.jpeg","Yes"));

//For loop to loop through all the stuff in the array to put all the info
Paintings.forEach((painting) => {
    const div = document.createElement("div");
    div.innerHTML = painting.paintingSection;

    // Shows painting info when image is clicked
    div.onclick = (event) => {
        const popup = document.getElementById("modal");
        popup.innerHTML = ""; 

        //Info for the name
        const name = document.createElement("h2");
        name.innerHTML = painting.name;
        popup.append(name);

        //Info for the artist
        const artist = document.createElement("h3");
        artist.innerHTML = `Artist: ${painting.artist}`;
        popup.append(artist);

        //Info about if the painting is framed or not
        const framed = document.createElement("h3");
        framed.innerHTML = `Framed?: ${painting.framed}`;
        popup.append(framed);

        //Stuff to show the image of the painting itself
        const img = document.createElement("img");
        img.src = painting.image;
        popup.append(img);

        //Makes the popup not hidden when the image is clocked
        popup.classList.remove("hidden");

        //Button stuff
        const button = document.createElement("button");
        button.classList.add("button");
        button.innerHTML = "Close";
        popup.append(button);
        button.onclick = () => {
            popup.classList.add("hidden");
        };
    };

    paintingList.append(div);
});

