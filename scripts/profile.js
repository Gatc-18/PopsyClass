import PutData from "../helpers/putData.js";
import { USER } from "../helpers/urls.js";

let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');
let btnEdit = document.getElementById('editar');
let btnSave = document.getElementById('guardar');
let form = document.querySelector('form');
let infoUser;

document.addEventListener('DOMContentLoaded', () => {
    infoUser = JSON.parse(sessionStorage.getItem('infoUser'));
    
    const { id, name, password, email } = infoUser;

    inputName.value = name;
    inputEmail.value = email;
    inputPassword.value = password;
})

btnEdit.addEventListener('click', () => {
    inputEmail.removeAttribute('disabled');
    inputName.removeAttribute('disabled');
    inputPassword.removeAttribute('disabled');


    btnSave.classList.remove('d-none');
    btnEdit.classList.add('d-none');
})

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const {id} = infoUser;
  

    let newInfoUser = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    newInfoUser.id = id

    sessionStorage.setItem('infoUser', JSON.stringify(newInfoUser))

    let url = `${USER}/${id}`
    

    await PutData(url, newInfoUser)

})