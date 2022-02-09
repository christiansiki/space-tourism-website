import {tabs} from "./tabs.js";

let techName = document.querySelector("#name");
let portrait = document.querySelector("#image-portrait");
let landscape = document.querySelector("#image-landscape");
let description = document.querySelector("#description");
let content = [];

fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
        data["technology"].forEach(element => {
            content.push(element)
        });
    });

// console.log(content);

export default function setTechValues(target) {
    let tabContent = content.filter((item) => content.indexOf(item) === Array.from(tabs).indexOf(target));

    // console.log(tabContent);

    techName.innerText = tabContent[0].name;
    landscape.src = tabContent[0].images.landscape;
    portrait.srcset = tabContent[0].images.portrait;
    description.innerText = tabContent[0].description;

}