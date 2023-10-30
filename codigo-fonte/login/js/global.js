'use strict';

const donatorFormCol = document.getElementById('donator-form-col')
const institutionFormCol = document.getElementById('institution-form-col')

const changeForm = (form) => {
    if (form === 'institution') {
        donatorFormCol.style.display = 'none'
        institutionFormCol.style = ''
    } else {
        institutionFormCol.style.display = 'none'
        donatorFormCol.style = ''
    }
}

makeMenu()
