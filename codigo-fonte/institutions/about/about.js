'use strict'
import { $g_getInstitutionById} from '../../public/js/institution.js'

function prox() {
    window.location = "../../login/index.html"
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id');


function makeAboutInfo() {
    const institution = $g_getInstitutionById(id)
    if (!institution) return

    console.log(institution)

    const institutionTitle = document.querySelector('#institution-title')
    institutionTitle.textContent = institution.name

    const textContainer = document.querySelector('#text-container')
    textContainer.innerHTML = `
        <p>${institution.description}</p>
        <h2>Nosso papel na Sociedade</h2>
        <p>${ institution.role }</p>
    `
}

makeAboutInfo()