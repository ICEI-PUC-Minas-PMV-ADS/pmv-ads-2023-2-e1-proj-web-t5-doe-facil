const donationForm = document.querySelector('#donation-form')
const donateTypes = [
    'Brinquedos',
    'Roupas',
    'Calçados',
    'Cama e banho',
    'Outro'
]

const addDonationFields = () => {
    const donationItems = donationForm.querySelector('#donation-items')
    const donationsCount =
        donationItems.querySelectorAll('.donation_item').length + 1

    const donationClone = donationExample.cloneNode(true)
    donationItems.appendChild(donationClone)

    const donationRemoveButton = donationClone.querySelector('.donation_remove')
    const typeSelect = donationClone.querySelector('.type_select')

    for(type of donateTypes) {
        typeSelect.appendChild(new Option(type))
    }

    if (donationsCount === 1) {
        donationRemoveButton.style.display = 'none'
        return
    }

    donationRemoveButton.addEventListener('click', (e) => {
        e.preventDefault()
        donationItems.removeChild(donationClone)
    })
}

const saveDonationForm = () => {
    const formInputs = donationForm.querySelectorAll('.form_item')
    const formValues = [...formInputs].map((input) => ({
        input: input.id,
        value: input.value,
    }))

    const donationFormValues = {
        inputs: formValues,
        // donations: formDonations,
    }

    localStorage.setItem('donation-values', JSON.stringify(donationFormValues))
}

const injectFormOldValues = () => {
    const donationFormValues = JSON.parse(
        localStorage.getItem('donation-values')
    )

    if (!donationFormValues.inputs) return

    for (input of donationFormValues.inputs) {
        donationForm.querySelector(`#${input.input}`).value = input.value
    }
}

// form events
donationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    saveDonationForm()
})

const addDonationButton = donationForm.querySelector('#add-donation-item')
addDonationButton.addEventListener('click', (e) => {
    e.preventDefault()
    addDonationFields()
})

// logic methods sequence
const donationItems = donationForm.querySelector('#donation-items')
const donationExample = donationItems
    .querySelectorAll('.donation_item')[0]
    .cloneNode(true)
donationItems.removeChild(donationItems.querySelector('.donation_item')) // remove existent donation_item

addDonationFields() // add donation_item with events

injectFormOldValues()
