'use strict'
import { $g_getDonationById } from '../../../public/js/donation.js'
const params = new URLSearchParams(window.location.search)

const id = params.get('id')

function makeDonationTableLines() {
    const donationInfo = $g_getDonationById(id)
    const corpoTabela = document.querySelector('#corpo-tabela')

    for (const donation of donationInfo.donations) {
        const lineTable = document.createElement('tr')
        lineTable.innerHTML = `
            <td>${donation.type}</td>
            <td>${donation.amount}</td>
            <td>${donation.description}</td>
        `

        corpoTabela.appendChild(lineTable)
    }
}
function makeDonationInformation() {
    const donationInfo = $g_getDonationById(id)
    const detailsDonator = document.querySelector('#details-donator')
    detailsDonator.innerHTML = `

    <div class="d-flex">
        <div class="p-2 flex-fill">
            <p class="inf-donations">DOADOR</p>
            <p>${donationInfo.name}</p>
        </div>
        <div class="p-2 flex-fill">
            <p class="inf-donations">Do dia</p>
            <p>${donationInfo.collection_date}</p>
        </div>
        <div class="p-2 flex-fill">
            <p class="inf-donations"> Até o dia</p>
            <p> ${donationInfo.finish_collection_date}</p>
            
        </div>
        
    </div>
    <div class="d-flex">
        <div class="p-2 flex-fill">
            <p class="inf-donations">Endereço de Coleta</p>
            <p>${donationInfo.address}</p>
        </div>
        <div class="p-2 flex-fill">
            <p class="inf-donations">Bairro</p>
            <p>${donationInfo.neighborhood}</p>
        </div>
        <div class="p-2 flex-fill">
            <p class="inf-donations"> CEP</p>
            <p> ${donationInfo.cep}</p>
            
        </div>
`
console.log(donationInfo)
    for (const donation of donationInfo.donations) {
        const lineTable = document.createElement('tr')
        lineTable.innerHTML = `
            <td>${donation.type}</td>
            <td>${donation.amount}</td>
            <td>${donation.description}</td>
        `

        corpoTabela.appendChild(lineTable)
    }
}

makeDonationTableLines()
makeDonationInformation()
