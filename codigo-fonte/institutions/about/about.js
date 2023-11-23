'use strict'
import { $g_getInstitutionById} from '../../public/js/institution.js'
import { $g_redirectTo } from '../../public/js/global.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');


function makeAboutInfo() {
    const institution = $g_getInstitutionById(id)
    if (!institution) return

    const institutionTitle = document.querySelector('#institution-title')
    institutionTitle.textContent = institution.name

    const institutionImage = document.querySelector('#institution-image')
    institutionImage.src =  "../" + institution.image

    const textContainer = document.querySelector('#text-container')
    textContainer.innerHTML = `
        <p>${institution.description}</p>
        <h2>Nosso papel na Sociedade</h2>
        <p>${ institution.role }</p>
        <h3>Informações</h3>
        <p>
            CNPJ: ${institution.cnpj} </br>
            Endereço: ${institution.address + ', ' + institution.address_number + ', ' +  institution.address_complement + ', ' + institution.neighborhood} </br>
            CEP :${institution.cep} </br>
            Email: ${institution.email}
        </p>

        <button
            class="btn custom--secondary"
        >
            Fazer uma doação!
        </button>
    `
    textContainer.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault()
        $g_redirectTo('dashboard/donations/create')
    })
}

makeAboutInfo()
