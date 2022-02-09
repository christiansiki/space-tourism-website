import {tabs} from "./tabs.js";

let crewName = document.querySelector("#name")
let imagePng = document.querySelector("#image-png");
let imageWebp = document.querySelector("#image-webp");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");
let content = [];



fetch("data.json")
    .then(res => res.json())
    .then((data) => {
        data["crew"].forEach(element => {
            content.push(element)
        });
    });

// console.log(content);

export default function setCrewValues(target) {
    let tabContent = content.filter((item) => content.indexOf(item) === Array.from(tabs).indexOf(target));

    // console.log(tabContent);

    crewName.innerText = tabContent[0].name;
    imagePng.src = tabContent[0].images.png;
    imageWebp.srcset = tabContent[0].images.webp;
    bio.innerText = tabContent[0].bio;
    role.innerText = tabContent[0].role;

}
