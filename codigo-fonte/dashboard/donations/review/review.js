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

makeDonationTableLines()
