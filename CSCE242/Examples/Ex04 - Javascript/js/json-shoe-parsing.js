const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        //fetch the data from the url and wait until the data is fetched
        const response = await fetch(url);
        //get the json from the response data and return it
        return response.json();
    }
    catch(error) {
        console.log("No data found!");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeList = document.getElementById("shoe-list");
    
    shoes.forEach((shoe)=>{
        //create a section for each shoe in the list, put all data in, then append to the overall list
        let shoeItem = document.createElement("section");

        shoeItem.innerHTML = `
        <section>
            <h2>${shoe.name}</h2>
            <ul>
                <li>Price: ${shoe.price}</li>
                <li>Brand: ${shoe.brand}</li>
                <li>Material: ${shoe.material}</li>
            </ul>

            <br>

            <ul>
                <li>Rating: ${shoe.rating}</li>
                <li>Reviews: ${shoe.reviews}</li>
            </ul>

        </section> 
        `

        const img = document.createElement("img");
        shoeList.append(img);
        img.src = `https://portiaportia.github.io/json/shoes.json/${shoe.img}`;

        shoeList.append(shoeItem);


    });
};

showShoes();