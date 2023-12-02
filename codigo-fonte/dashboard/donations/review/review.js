'use strict'
import {
    $g_getDonationById,
    $g_acceptDonation,
    $g_rejectDonation,
    $g_getDateFormatted,
    $g_deleteDonation,
} from '../../../public/js/donation.js'
import { $g_makeLateralMenu } from '../../../public/js/components.js'
import { $g_getSessionUserType } from '../../../public/js/session.js'
import { $g_redirectTo } from '../../../public/js/global.js'
import { $g_checkPermissions } from '../../../public/js/permissions.js'

$g_checkPermissions('dashboard/donations')
$g_makeLateralMenu('donation')

const acceptButton = document.querySelector('#accept-button')
const rejectButton = document.querySelector('#reject-button')
const editButton = document.querySelector('#edit-button')
const deleteButton = document.querySelector('#delete-button')

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

acceptButton.addEventListener('click', function (e) {
    e.preventDefault()
    $g_acceptDonation(id)
    alert('Doação aceita com sucesso!')
    $g_redirectTo('dashboard/donations')
})

rejectButton.addEventListener('click', function (e) {
    e.preventDefault()
    $g_rejectDonation(id)
    alert('Doação rejeitada, agora essa doação se tornou pública.')
    $g_redirectTo('dashboard/donations')
})

editButton.addEventListener('click', function (e) {
    e.preventDefault()
    $g_redirectTo(`dashboard/donations/create/?id=${id}`)
})

deleteButton.addEventListener('click', function (e) {
    e.preventDefault()
    $g_deleteDonation(id)
    alert('Doação excluída com sucesso.')
    $g_redirectTo('dashboard/donations')
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

const handleButtons = (status) => {
    const userType = $g_getSessionUserType()

    if (userType === 'donator' || userType === 'admin') {
        acceptButton.remove()
        rejectButton.remove()
    }

    if (userType === 'institution') {
        editButton.remove()
        deleteButton.remove()
    }

    if (status === 'public') {
        rejectButton.remove()
    }

    if (status === 'accepted') {
        if (userType !== 'admin') deleteButton.remove()
        if (userType === 'donator') editButton.remove()
        if (userType === 'institution') {
            acceptButton.remove()
            rejectButton.remove()
        }
    }
}

function makeDonationInformation() {
    const donationInfo = $g_getDonationById(id)
    const detailsDonator = document.querySelector('#details-donator')
    detailsDonator.innerHTML = `
    
    <div class="pt-2 col-sm-3">
        <p class="inf-donations">Doador</p>
        <p>${donationInfo.name}</p>
    </div>

    <div class="pt-2 col-sm-3">
        <p class="inf-donations">CPF</p>
        <p> ${donationInfo.cpf}</p>
    </div>

    <div class="pt-2 col-sm-3 col-md-3">
        <p class="inf-donations">E-mail</p>
        <p> ${donationInfo.email}</p>
    </div>

    <div class="pt-2 col-sm-3">
        <p class="inf-donations">Telefone</p>
        <p> ${donationInfo.phone}</p>
    </div>

    <div class="pt-2 col-sm-6">
        <p class="inf-donations">Endereço de Coleta</p>
        <p>${donationInfo.address}, ${donationInfo.address_number}, ${
            donationInfo.address_complement
        }</p>
    </div>

    <div class="pt-2 col-sm-3">
        <p class="inf-donations">Bairro</p>
        <p>${donationInfo.neighborhood}</p>
    </div>
    <div class="pt-2 col-sm-3">
        <p class="inf-donations"> CEP</p>
        <p> ${donationInfo.cep}</p>
    </div>

    <div class="pt-2 col-sm-3">
        <p class="inf-donations">Período para Coleta</p>
        <p>${$g_getDateFormatted(
            donationInfo.collection_date
        )} até ${$g_getDateFormatted(donationInfo.finish_collection_date)}</p>
    </div>

    <div class="pt-2 col-sm-3">
        <p class="inf-donations">Horário para Coleta</p>
        <p> ${donationInfo.from_hour} até ${donationInfo.until_hour}</p>
    </div>

    <div class="pt-2 col-sm-3">
        <p class="inf-donations">Data da Doação</p>
        <p>${donationInfo.date}</p>
    </div>

    <div class="pt-2 col-sm-3">
        <p class="inf-donations">Situação da Doação</p>
        <p>${donationInfo.formatted_status}</p>
    </div>

    <div class="pt-2 col-sm-6">
        <p class="inf-donations">Observações</p>
        <p> ${donationInfo.obeservation ? donationInfo.obeservation : '-'}</p>
    </div>

    <div class="pt-2 col-sm-6 col-md-6">
        <p class="inf-donations">Instituição Beneficiada</p>
        <p>${donationInfo.institution_name ? donationInfo.institution_name : 'Doação Pública'}</p>
    </div>
`
    handleButtons(donationInfo.status)
}

makeDonationTableLines()
makeDonationInformation()
