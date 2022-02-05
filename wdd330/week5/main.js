//create an array of hikes
import Hikes from "hikes.js";

const hikeList = new Hikes("hikes");



//grab array and insert it into the page
window.addEventListener("load", () => {
  hikeList.showHikeList();
});