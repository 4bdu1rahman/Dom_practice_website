let addImage = document.getElementById("img-button")
let imageDiv = document.getElementById("image-div")
let paragraph = document.getElementById("p-button")
let paragraphDiv = document.getElementById("p-div")

let foodArray= ["bbq", "lasagne", "pizza"]


// Add image button
addImage.onclick = function () {
    let randNum = Math.random() * foodArray.length;
    let randInt = Math.floor(randNum);
    let randomName = foodArray[randInt];
  
    const newImage = document.createElement("img");
    newImage.src = "images/" + randomName + ".jpg";

    imageDiv.appendChild(newImage);
}

//Add paragraph button
paragraph.onclick = function() {
    const newParagraph = document.createElement("p");
    const createText = document.createTextNode( "Did you know that my favorite food is chicken?");

    paragraphDiv.appendChild(createText)
    Element.appendChild(newParagraph)
}