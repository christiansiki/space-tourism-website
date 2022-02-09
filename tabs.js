import setCrewValues from "./crew.js";
import setTechValues from "./technology.js";
import setDestinationValues from "./destination.js";


const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
let destination = document.querySelector(".destination");
let crew = document.querySelector(".crew");
let technology = document.querySelector(".technology");
let body = document.querySelector("body");

let tabFocus = 0;

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
})

function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    const keydownUp = 38;
    const keydownDown = 40;

    if(e.keyCode === keydownLeft || e.keyCode === keydownRight
        || e.keyCode === keydownUp || e.keyCode === keydownDown) {
        tabs[tabFocus].setAttribute('tabindex', -1);
        e.preventDefault();
        
        if(e.keyCode === keydownRight || e.keyCode === keydownDown) {
            tabFocus++;
            if(tabFocus >= tabs.length){
                tabFocus = 0;
            }
        } else if (e.keyCode === keydownLeft || e.keyCode === keydownUp) {
            tabFocus--;
            if(tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
    }

    tabs[tabFocus].setAttribute('tabindex', 0);
    tabs[tabFocus].focus();
    // console.log(tabFocus);
}

function changeTabPanel(e) {
    let targetTab = e.target;
    const tabContainer = targetTab.parentNode;

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    if(body.contains(destination)) {
        setDestinationValues(targetTab);
    }
    else if(body.contains(crew)) {
        setCrewValues(targetTab);
    } 
    else if(body.contains(technology)){
        setTechValues(targetTab);
    }

}

export { tabs };