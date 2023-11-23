'use strict'
import {
    $g_getDonationById,
    $g_acceptDonation,
    $g_rejectDonation,
    $g_getDateFormatted,
} from '../../../public/js/donation.js'
import { $g_makeLateralMenu } from '../../../public/js/components.js'
import { $g_getSessionUserType } from '../../../public/js/session.js'
import { $g_redirectTo } from '../../../public/js/global.js'

$g_makeLateralMenu('donation')

const acceptButton = document.querySelector('#accept-button')
const rejectButton = document.querySelector('#reject-button')
const editButton = document.querySelector('#edit-button')

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

acceptButton.addEventListener('click', function (e) {
    e.preventDefault()
    $g_acceptDonation(id)
})

rejectButton.addEventListener('click', function (e) {
    e.preventDefault()
    $g_rejectDonation(id)
})

editButton.addEventListener('click', function (e) {
    e.preventDefault()
    $g_redirectTo(`dashboard/donations/create/?id=${id}`)
})

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
    
    <div class="pt-2 col-12">
        <p class="inf-donations">Doador</p>
        <p>${donationInfo.name}</p>
    </div>

    <div class="pt-2 col-6">
        <p class="inf-donations">Endereço de Coleta</p>
        <p>${donationInfo.address}, ${donationInfo.address_number}, ${
            donationInfo.address_complement
        }</p>
    </div>

    <div class="pt-2 col-3">
        <p class="inf-donations">Bairro</p>
        <p>${donationInfo.neighborhood}</p>
    </div>
    <div class="pt-2 col-3">
        <p class="inf-donations"> CEP</p>
        <p> ${donationInfo.cep}</p>
    </div>

    <div class="pt-2 col-6">
        <p class="inf-donations">Horário Coleta</p>
        <p> ${donationInfo.from_hour} até ${donationInfo.until_hour}</p>
        
    </div>
    <div class="pt-2 col-3">
        <p class="inf-donations">E-mail</p>
        <p> ${donationInfo.email}</p>
        
    </div>
    <div class="pt-2 col-3">
        <p class="inf-donations">Telefone</p>
        <p> ${donationInfo.phone}</p>
    </div>
    
    <div class="pt-2 col-3">
        <p class="inf-donations">Do dia</p>
        <p>${$g_getDateFormatted(donationInfo.collection_date)}</p>
    </div>
    <div class="pt-2 col-3">
        <p class="inf-donations"> Até o dia</p>
        <p> ${$g_getDateFormatted(donationInfo.finish_collection_date)}</p>
        
    </div>
    <div class="pt-2 col-3">
        <p class="inf-donations">Observação</p>
        <p> ${donationInfo.obeservation}</p>
    </div>
    

    
    
`

    const userType = $g_getSessionUserType()

    if (userType === 'donator') {
        acceptButton.remove()
        rejectButton.remove()
    } else if (userType === 'institution') {
        editButton.remove()
    } else {
        acceptButton.remove()
        rejectButton.remove()
        editButton.remove()
    }
}

makeDonationTableLines()
makeDonationInformation()
