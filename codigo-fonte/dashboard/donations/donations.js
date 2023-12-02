import { $g_makeLateralMenu } from '../../public/js/components.js'
import {
    $g_getDonations,
    $g_getPublicDonations,
} from '../../public/js/donation.js'
import { $g_redirectTo } from '../../public/js/global.js'
import { $g_checkPermissions } from '../../public/js/permissions.js'
import {
    $g_getSessionUser,
    $g_sessionUserIsDonator,
} from '../../public/js/session.js'

const params = new URLSearchParams(window.location.search)
const paramPublic = params.get('public')

$g_checkPermissions('dashboard/donations')

if (paramPublic) {
    $g_makeLateralMenu('public-donations')
} else {
    $g_makeLateralMenu('donations')
}

function makeDonationTableLine() {
    const user = $g_getSessionUser()
    const doacoes =
        paramPublic && user.type !== 'donator'
            ? $g_getPublicDonations()
            : $g_getDonations()
    const corpoTabela = document.querySelector('#corpoTabela')

    if (!doacoes || doacoes.length == 0) {
        const tableDonations = document.querySelector('#table-donations')
        tableDonations.innerHTML = `
            <h3 class="mx-4 mt-4 text-center">Nenhuma doação encontrada.</h3>
        `
        return
    }

    for (const doacao of doacoes) {
        const line = document.createElement('tr')
        line.innerHTML = `
            <td>${doacao.name}</td>
            <td>${doacao.donations_type}</td>
            <td>${doacao.formatted_status}</td>
            <td>${doacao.amount}</td>
            <td>${doacao.date}</td>
        `

        const td = document.createElement('td')
        const editBtn = document.createElement('a')
        editBtn.textContent = $g_sessionUserIsDonator()
            ? 'Visualizar'
            : 'Analisar'
        editBtn.href = '#'

        editBtn.addEventListener('click', function (e) {
            e.preventDefault()
            $g_redirectTo(`dashboard/donations/review/?id=${doacao.id}`)
        })

        line.appendChild(td)
        td.appendChild(editBtn)
        corpoTabela.appendChild(line)
    }
}

makeDonationTableLine()
