let rectangle = document.getElementById("rectangle");

function setNewBoxSize() { 
    let width = document.getElementById("box_width");
    let height = document.getElementById("box_height");

    let new_width = width.value + "px";
    rectangle.style.width = new_width;
    let new_height = height.value + "px";
    rectangle.style.height = new_height;
}

function setNewBorderSize() {
    let width = document.getElementById("border_width");

    let new_width = width.value + "px";
    rectangle.style.borderWidth = new_width;
}

function setGreenBorder(){
    rectangle.style.borderColor = "green";

}

function setRedBorder(){
    rectangle.style.borderColor = "red";

}

function setOrangeBorder(){
    rectangle.style.borderColor = "orange";
}

function setSolidBorder(){
    rectangle.style.borderStyle = "solid";
}

function setDottedBorder(){
    rectangle.style.borderStyle = "dotted";
}

function setDashedBorder(){
    rectangle.style.borderStyle = "dashed";
}

function setGreenBackground(){
    rectangle.style.backgroundColor = "green";

}

function setRedBackground(){
    rectangle.style.backgroundColor = "red";

}

function setOrangeBackground(){
    rectangle.style.backgroundColor = "orange";
}