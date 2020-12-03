let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
];

function createDivs() {
    for(var i = 0; i < objects.length; i++) {
        let divs = document.createElement("div");
        divs.style.color = objects[i].color;
        divs.style.height = objects[i].height;
        divs.style.widows = objects[i].width;
        document.body.appendChild(divs);
    }
    
}

