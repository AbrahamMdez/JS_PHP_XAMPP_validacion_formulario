const form       = document.querySelector('#form');
const userName   = document.querySelector('#name');
const surname    = document.querySelector('#surname');
const age        = document.querySelector('#age');
const gender     = document.querySelector('#gender');
const date1      = document.querySelector('#date1');
const date2      = document.querySelector('#date2');
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

//A diferencia de keyup, change nos muestra los cambios en el form siempre, keyup si por ejemplo copias y pegas algo en el input no lo detecta
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

date1, date2.addEventListener('change', e => {

    const date1Formated = new Date(date1.value);
    const date2Formated = new Date(date2.value);
    console.log(date1Formated);
    console.log(date2Formated);

    let milisegDay = 24 * 60 * 60 * 1000;

    let milisegSpendt = Math.abs(date1Formated.getTime() - date2Formated.getTime());

    let daysSpendt = Math.round(milisegSpendt/milisegDay);

    console.log(milisegDay);
    console.log(milisegSpendt);
    console.log(daysSpendt);
});

dni.addEventListener('change', e => {
    if(e.target.value.trim().length > 0) formIsValid.dni = true;
});

height.addEventListener('change', e => {
    const heightWithOnlyTwoDecimal = e.target.value;
    const newNumber = heightWithOnlyTwoDecimal.toFixed();
    console.log(newNumber);
    if(newNumber.trim().length > 0) formIsValid.height = true;
});

email.addEventListener('change', e => {
    if(e.target.value.trim().length > 0) formIsValid.email = true;
});

observer.addEventListener('input', e => {
    //Esta es la funcion que habia buscado en Stack Overflow, la dejo como recuerdo y ejemplo adiccional
    /* const textAreaForm = e.target.value;
    const textAreaValidate50FirstLetters = textAreaForm.substring( 0, 50);
    console.log(textAreaValidate50FirstLetters) */

    //Esta es la forma que tu mandas en el ejercicio
    let contentTextArea = '';
    let maxLengtTextAreaContentAllowed = 50;

    const realLenghtTextArea = e.target.value.length;
    console.log(realLenghtTextArea)

    if(realLenghtTextArea <= maxLengtTextAreaContentAllowed) {
        contentTextArea = e.target.value;
    }else {
        e.target.value = contentTextArea;
    }

    if(contentTextArea.trim().length > 0 && contentTextArea.trim().length < 50 ) formIsValid.observer = true;
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