//Get all brewery info asyncronously
const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/v1/breweries";
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log("Issue: ");
    }

}

const showBreweries = async() => {
    const breweries = await getBreweries();
    const breweryList = document.getElementById("breweries");

    breweries.forEach((brewery)=> {
        const section = document.createElement("section");
        breweryList.append(section);
        section.classList.add("brewery");

        section.innerHTML = `
            <section>
                <h2>${brewery.name}</h2>
                <ul>
                    <li>Brewery Type: ${brewery.brewery_type}</li>
                    <li>Address 1: ${brewery.address_1}</li>
                        <li>Address 2: ${brewery.address_2}</li>
                        <li>Address 3: ${brewery.address_3}</li>
                    <li>City: ${brewery.city}</li>
                    <li>State ${brewery.state}</li>
        `
    })
}

showBreweries();