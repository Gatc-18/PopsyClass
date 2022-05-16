import GetData from "../helpers/getData.js";
import { USER } from "../helpers/urls.js";

const form = document.querySelector('form');


form.addEventListener('submit', async (e) => {
   e.preventDefault();
     let email = document.getElementById('email').value;

     let data = await GetData(USER);
    
   data.forEach(user => {
       const { email:emailUser } = user;

       if(emailUser == email ){
           window.location.href = './pages/home.html'
       }
   })

})