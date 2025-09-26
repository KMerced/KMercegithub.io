document.getElementById("display").onclick = (event) => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);

    //write numbers 1-10
    for (let i=1; i<=10; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }
}

document.getElementById("count").onclick = () => {
    const error = document.getElementById("error-num");
    error.innerHTML = "";

    const start = parseInt(document.getElementById("txt-start").value);
    const stop = parseInt(document.getElementById("txt-stop").value);

    const result = document.getElementById("div-count");
    result.innerHTML = "";

    if(start > stop) {
        error.innerHTML = "*Stop must be larger than start";
        return;
    }

    //Loop for every # start-end & display number is <p>s
    for (let i=start; i<=stop; i++) {
        const p = document.createElement("p");
        p.innerHTML = i;
        result.append(p);
        p.onclick = () => {
            console.log(`You clicked number ${i}`);
        }
    }
}

document.getElementById("toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball","rope","doll","teddy bear","toy car","plush"];
    //2 options to display the list:
    
    //Option 1: Iterate over the toys & add li's to the ul
    /*for (let i=0; i<toys.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li)
    }*/

    //(Preferred option) Option 2: Take toys function as parameter and applies the parameter for each toy in the array
    toys.forEach((toy,i)=>{
        //console.log(i + ". " + toy);
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
}

document.getElementById("toys-price").onclick = () => {
    const toys = [];
    toys["ball"] = 2.99;
    toys["rope"] = 1.98;
    toys["doll"] = 19.99;
    toys["teddy bear"] = 5.99;
    toys["toy car"] = 9.99;
    toys["plush"] = 14.99;

    const toyPrices = document.getElementById("toy-prices");
    toyPrices.innerHTML = "";

    for(let toy in toys) {
        //Loop through and make a new <p> for each toy, they will tell the name of the toy and the price
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyPrices.append(p);

        p.onclick = () => {
            const toyCost = document.getElementById("toy-cost");
            toyCost.innerHTML = `The ${toy} costs $${toys[toy]}`;
        };
    }
    
}