class Dog {
    constructor(title,breed,color,age,size,pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x2964";
        h3.append(arrow);
        
        //div
        const div = document.createElement("div");
        div.classList.add("columns");
        section.append(div);
        
        //1st column
        const column1 = document.createElement("div");
        div.append(column1);
        column1.append(this.picture(this.pic));
        
        //2nd column
        const column2 = document.createElement("div");
        div.append(column2);
        //styling
        column2.classList.add("transparent");
        column2.style.display = "flex";
        column2.style.flexDirection = "row";
        column2.style.flexWrap = "wrap";
        column2.style.gap = "20px";
        //appending
        column2.append(this.paragraph("Breed",this.breed));
        column2.append(this.paragraph("Age",this.age));
        column2.append(this.paragraph("Size",this.size));
        
        arrow.onclick = (e) => {
            e.preventDefault(); //prevents going to the destination of a link
            column2.classList.toggle("transparent");
        }

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;
        return img;
    }

    paragraph(key,value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:${value}`;
        return p;
    }
}

const dogs = [];
    dogs.push(new Dog("Coco","Yorkie","Black",6,"small","yorkie.jpg"));
    dogs.push(new Dog("Mashle","Pitt Bull","Black",2,"large","pitt-bull.jpg"));
    dogs.push(new Dog("Kris","Golden Retriever","Yellow",4,"large","golden-retriever.jpg"));

//On page load, do this
const dogList = document.getElementById("doglist");

dogs.forEach((dog) => {
    dogList.append(dog.item);
});