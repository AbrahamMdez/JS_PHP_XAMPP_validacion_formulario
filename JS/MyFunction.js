const form       = document.querySelector('#form');
const userName   = document.querySelector('#name');
const surname    = document.querySelector('#surname');
const age        = document.querySelector('#age');
const gender     = document.querySelector('#gender');
const dni        = document.querySelector('#id');
const height     = document.querySelector('#height');
const email      = document.querySelector('#email');
const observer   = document.querySelector('#observer');
const newsletter = document.querySelector('#newsletter');

const creatorForm = 'Abraham';

const formIsValid = {
    userName:   false,
    surname:    false,
    age:        false,
    gender:     false,
    dni:        false,
    height:     false,
    email:      false,
    observer:   false,
    newsletter: false
};

form.addEventListener('submit', e => {
    validateForm();
    e.preventDefault();
});

//A diferencia de keyup, change nos muestra los cambios en el form siempre, keyup si por ejemplo copias y pegas algo ene l input no lo detecta
userName.addEventListener('change', e => {
    const nameForm = e.target.value;
    const nameFormChangedFirstLetterToCapital = nameForm[0].toUpperCase() + nameForm.substr(1);
    console.log(nameFormChangedFirstLetterToCapital);
    if(nameFormChangedFirstLetterToCapital.trim().length > 0) formIsValid.userName = true;
});

surname.addEventListener('change', e => {
    const surnameForm = e.target.value;
    const surnameFormChangedFirstLetterToCapital = surnameForm[0].toUpperCase() + surnameForm.substr(1);
    console.log(surnameFormChangedFirstLetterToCapital);
    if(surnameFormChangedFirstLetterToCapital.trim().length > 0) formIsValid.surname = true;
});

age.addEventListener('change', e => {
    if(e.target.value > 18) formIsValid.age = true;
});

gender.addEventListener('change', e => {
    if(e.target.checked == true) formIsValid.gender = true;
});

dni.addEventListener('change', e => {
    if(e.target.value.trim().length > 0) formIsValid.dni = true;
});

height.addEventListener('change', e => {
    const heightWithOnlyTwoDecimal = e.target.value;
    const newNumber = heightWithOnlyTwoDecimal.toFixed(2)
    console.log(newNumber);
    if(heightWithOnlyTwoDecimal.trim().length > 0) formIsValid.height = true;
});

email.addEventListener('change', e => {
    if(e.target.value.trim().length > 0) formIsValid.email = true;
});

observer.addEventListener('input', e => {
    const textAreaForm = e.target.value;
    const textAreaValidate50FirstLetters = textAreaForm.substring( 0, 50);
    console.log(textAreaValidate50FirstLetters)
    if(textAreaValidate50FirstLetters.trim().length > 0) formIsValid.observer = true;
});

newsletter.addEventListener('change', e => {
    if(e.target.value.trim().length > 0) formIsValid.newsletter = true;
});

const validateForm = () => {

    const formValues = Object.values(formIsValid);
    const inputValid = formValues.findIndex( value => value == false);

    if(inputValid == -1) {

        const xhttp = new XMLHttpRequest();

        xhttp.open('POST', 'PHP/controller.php', true);
    
        xhttp.send(); 

        const newFormData = new FormData(form);
        console.log(newFormData);
    }else {
        alert('Formulario invalido');
    } 
};