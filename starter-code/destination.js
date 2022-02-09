import {tabs} from "./tabs.js";

let planetName = document.querySelector("#name")
let imagePng = document.querySelector("#image-png");
let imageWebp = document.querySelector("#image-webp");
let description = document.querySelector("#description");
let distance = document.querySelector("#distance");
let travel = document.querySelector("#travel");
let content = [];


fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
        data["destinations"].forEach((element) => {
            content.push(element)
        });
    });

// console.log(content);

export default function setDestinationValues(target) {
    let tabContent = content.filter((item) => content.indexOf(item) === Array.from(tabs).indexOf(target));

    // console.log(tabContent);

    planetName.innerText = tabContent[0].name;
    imagePng.src = tabContent[0].images.png;
    imageWebp.srcset = tabContent[0].images.webp;
    description.innerText = tabContent[0].description;
    distance.innerText = tabContent[0].distance;
    travel.innerText = tabContent[0].travel;

}

