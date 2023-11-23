import { injectInstitutionsOptions, resetDonationFields } from './form.js'
import { injectFormDraft } from './draft.js'
import { $g_getDonationById } from '../../../../public/js/donation.js'

export const mountForm = () => {
    const donationElementField = document
        .querySelectorAll('#donation-form .donation_fields')[0]
        .cloneNode(true)

    injectInstitutionsOptions()
    resetDonationFields(donationElementField)

    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    if (id) {
        const donation = $g_getDonationById(id)
        if (!donation) return

        const form = document.querySelector('#donation-form')
        const newInputs = document.createElement('div')

        newInputs.innerHTML = `
            <input type="hidden" class="form_item" id="id" value="${donation.id}" />
            <input type="hidden" class="form_item" id="status" value="${donation.status}" />
            <input type="hidden" class="form_item" id="donator" value="${donation.donator}" />
            <input type="hidden" class="form_item" id="edited" value="1" />
        `

        form.appendChild(newInputs)

        const draftCol = form.querySelector('#draft-col')
        draftCol.remove()

        const submitButton = form.querySelector('#submit')
        submitButton.textContent = 'Atualizar Doação'

        injectFormDraft(donationElementField, donation)
    } else {
        injectFormDraft(donationElementField)
    }

    return { donationElementField }
}
