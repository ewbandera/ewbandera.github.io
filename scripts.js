import { nav } from "./navbar.js";
import { home } from "./home.js";
import { projects } from "./projects.js";

function loadNav(){
    document.getElementById("nav").innerHTML = nav;
}
function loadMain(page){
    document.getElementById("main").innerHTML = page;

}
window.onload=(event)=>{
    loadNav()
    document.getElementById("home").addEventListener("click", ()=>{loadMain(home)});
    document.getElementById("projects").addEventListener("click", ()=>{loadMain(projects)});
    loadMain(home);//to set home as the default
};


