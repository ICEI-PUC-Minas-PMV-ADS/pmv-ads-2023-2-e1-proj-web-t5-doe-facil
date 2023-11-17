import { $g_makeLateralMenu } from '../../public/js/components.js'
import { $g_getDonations } from '../../public/js/donation.js'
import { $g_redirectTo } from '../../public/js/global.js'

$g_makeLateralMenu('donations')

function makeDonationTableLine() {
    const doacoes = $g_getDonations()
    const corpoTabela = document.querySelector('#corpoTabela')

    if(!doacoes) return

    for (const doacao of doacoes) {
        console.log(doacao)
        const line = document.createElement("tr")
        line.innerHTML = `
            <td>${doacao.name}</td>
            <td>${doacao.donations_type}</td>
            <td>5</td>
            <td>20/12/2022</td>
        `

        const td = document.createElement('td')
        const editBtn = document.createElement("a")
        editBtn.textContent = "Editar"
        editBtn.href = "#"

        editBtn.addEventListener('click', function(e){
            e.preventDefault()
            $g_redirectTo(`dashboard/donations/create/?id=${doacao.id}`)
        })
        
        line.appendChild(td)
        td.appendChild(editBtn)
        corpoTabela.appendChild(line)
    }

}

makeDonationTableLine()
