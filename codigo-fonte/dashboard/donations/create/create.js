const donationForm = document.querySelector('#donation-form')
const donateTypes = [
    'Brinquedos',
    'Roupas',
    'Calçados',
    'Cama e banho',
    'Outro',
]

const addDonationFields = () => {
    const donationItems = donationForm.querySelector('#donation-items')
    const donationsCount =
        donationItems.querySelectorAll('.donation_fields').length + 1

    const donationClone = donationExample.cloneNode(true)
    donationItems.appendChild(donationClone)

    const donationRemoveButton = donationClone.querySelector('.donation_remove')
    const typeSelect = donationClone.querySelector('.type_select')

    for (type of donateTypes) {
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

const getFormInputs = () => {
    const formInputs = donationForm.querySelectorAll('.form_item')

    const formValues = [...formInputs].map((input) => ({
        input: input.id,
        value: input.value,
    }))

    const donationFields = donationForm.querySelectorAll('.donation_fields')
    const formDonationsValues = []

    if (donationFields.length) {
        for (donation of donationFields) {
            const inputs = donation.querySelectorAll('.donation_item')

            const inputList = [...inputs].map((input) => ({
                input: input.id,
                value: input.value,
            }))

            formDonationsValues.push(inputList)
        }
    }

    const donationFormValues = {
        inputs: formValues,
        donations: formDonationsValues,
    }

    return donationFormValues
}

const submitDonationForm = () => {
    console.log('TODO: implement submit')
}

const saveDraftForm = () => {
    localStorage.setItem('donation-values', JSON.stringify(getFormInputs()))
    console.log('draft saved')
}

const injectFormOldValues = () => {
    const donationFormValues = JSON.parse(
        localStorage.getItem('donation-values')
    )

    if (!donationFormValues) return

    if (donationFormValues.inputs) {
        for (input of donationFormValues.inputs) {
            donationForm.querySelector(`#${input.input}`).value = input.value
        }
    }

    if (donationFormValues.donations) {
        let donationFields = donationForm.querySelectorAll('.donation_fields')
        const { donations } = donationFormValues

        while (donationFields.length < donations.length) {
            addDonationFields()
            donationFields = donationForm.querySelectorAll('.donation_fields')
        }

        for (fields of donationFields) {
            const donation = donations.shift()

            for (input of donation) {
                fields.querySelector(`#${input.input}`).value = input.value
            }
        }
    }
}

// form events
donationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitDonationForm()
})

const draftButton = donationForm.querySelector('#draft')
draftButton.addEventListener('click', (e) => {
    e.preventDefault()
    saveDraftForm()
})

const addDonationButton = donationForm.querySelector('#add-donation-item')
addDonationButton.addEventListener('click', (e) => {
    e.preventDefault()
    addDonationFields()
})

// logic methods sequence
const donationItems = donationForm.querySelector('#donation-items')
const donationExample = donationItems
    .querySelectorAll('.donation_fields')[0]
    .cloneNode(true)

donationItems.removeChild(donationItems.querySelector('.donation_fields'))

addDonationFields()

injectFormOldValues()
