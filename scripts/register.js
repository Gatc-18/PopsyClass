import PostData from "../helpers/postData.js";

const form = document.querySelector('form');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let infoUser = {
        id: crypto.randomUUID(),
        name,
        email,
        password
    }

  await PostData("http://localhost:3000/Usuarios", infoUser);

})