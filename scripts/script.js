import GetData from "../helpers/getData.js";
import { PALETAS } from "../helpers/urls.js";
import ShowCard from "../modules/showCard.js";

const templateFragment = document.querySelector('#template').content;
const container = document.getElementById('containerCards');

document.addEventListener('DOMContentLoaded', async () => {

   let dataPaletas =  await GetData(PALETAS);

   ShowCard(templateFragment, container, dataPaletas)

})

