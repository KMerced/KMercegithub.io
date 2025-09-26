//Consts
const scene = document.getElementById("scene");
const cloud = document.getElementById("cloud");
const tree = document.getElementById("tree");
const sun = document.getElementById("the-sun");
const moon = document.getElementById("the-moon");
const date = new Date();
let hours = date.getHours();

//Button stuff
document.getElementById("draw-scene").onclick = () => {
    //Unhide the scene
    //Note to self, keeping these keeps the original cloud and tree so they overlap with each other
    //cloud.classList.remove("hidden");
    //tree.classList.remove("hidden");

    //Make 6 clouds
    for(let i=0; i<6; i++) {
        const createCloud = document.createElement("div");
        createCloud.classList.add("cloud");
        tree.style.position = "absolute";
        createCloud.style.left = `${i * 260}px`; 
        scene.append(createCloud);
    }

    //Make 6 trees
    for(let i=0; i<6; i++) {
        const tree = document.createElement("div");
        tree.classList.add("tree");
        tree.style.position = "absolute";
        tree.style.left = `${i * 260}px`;
        //Had to add this because the trees would be the same position the clouds were otherwise
        tree.style.bottom = '0';
        
        //The tree art I chose has all parts of the tree in different classes, so gotta put these for all the parts of the tree
        const branch1 = document.createElement("div");
        branch1.classList.add("branch");
        
        const branch2 = document.createElement("div");
        branch2.classList.add("branch");
        branch2.classList.add("branch-2")
        
        const branch3 = document.createElement("div");
        branch3.classList.add("branch");
        branch3.classList.add("branch-3");
        
        const trunk = document.createElement("div");
        trunk.classList.add("trunk");

        //Append all the tree parts to the main tree class because they'll look all jumbled up otherwise (REMEMBER THIS FOR THE FUTURE PLEASE I BEG OF YOU STOP FORGETTING THINGS)
        tree.append(branch1);
        tree.append(branch2);
        tree.append(branch3);
        tree.append(trunk);

        scene.append(tree);
    }

    //Do the sun and moon stuff
    if(hours>18 || hours<6) {
        document.body.style.background = "black";
        moon.classList.remove("hidden");
        sun.classList.add("hidden");
    } else {
        document.body.style.background = "lightblue";
        sun.classList.remove("hidden");
        moon.classList.add("hidden");
    }
}