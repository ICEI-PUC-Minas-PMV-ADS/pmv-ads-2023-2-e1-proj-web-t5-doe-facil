const donationForm = document.querySelector('#donation-form')

const donateTypes = [
    'Brinquedos',
    'Roupas',
    'Calçados',
    'Cama e banho',
    'Outro',
]

const getInstitutions = () => {
    return [
        'Instituição 1',
        'Instituição 2',
        'Instituição 3',
        'Instituição 4',
        'Instituição 5',
    ]
}

const addDonationFields = () => {
    const donationItems = donationForm.querySelector('#donation-items')
    const donationsCount =
        donationItems.querySelectorAll('.donation_fields').length + 1

    const donationClone = donationExample.cloneNode(true)
    donationItems.appendChild(donationClone)

    const donationRemoveButton = donationClone.querySelector('.donation_remove')
    const typeSelect = donationClone.querySelector('.type_select')

    for (const type of donateTypes) {
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
        for (const donation of donationFields) {
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

const createPayload = (donationForm) => {
    const { inputs, donations } = donationForm

    const donationPayload = {
        donations: [],
    }

    for (const input of inputs) {
        donationPayload[input.input] = input.value
    }

    for (const donation of donations) {
        const donationObject = {}

        for (const field of donation) {
            donationObject[field.input] = field.value
        }
        donationPayload.donations.push(donationObject)
    }

    return donationPayload
}

const submitDonationForm = () => {
    let donations = JSON.parse(localStorage.getItem('donations'))
    if (!donations) donations = []

    donations.push(createPayload(getFormInputs()))

    localStorage.setItem('donations', JSON.stringify(donations))
}

const saveDraftForm = () => {
    localStorage.setItem('donation_draft', JSON.stringify(getFormInputs()))
    console.log('draft saved')
}

const injectFormOldValues = () => {
    const donationFormValues = JSON.parse(
        localStorage.getItem('donation_draft')
    )

    if (!donationFormValues) return

    if (donationFormValues.inputs) {
        for (const input of donationFormValues.inputs) {
            const selectedInput = donationForm.querySelector(`#${input.input}`)
            if (selectedInput) selectedInput.value = input.value
        }
    }

    if (donationFormValues.donations) {
        let donationFields = donationForm.querySelectorAll('.donation_fields')
        const { donations } = donationFormValues

        while (donationFields.length < donations.length) {
            addDonationFields()
            donationFields = donationForm.querySelectorAll('.donation_fields')
        }

        for (const fields of donationFields) {
            const donation = donations.shift()

            for (const input of donation) {
                const field = fields.querySelector(`#${input.input}`)
                if (field) field.value = input.value
            }
        }
    }
}

const injectInstitutionsForm = () => {
    const institutionsSelect = donationForm.querySelector('#institution')
    const institutionsList = getInstitutions()

    for (const item of institutionsList) {
        const option = document.createElement('option')
        option.textContent = item
        institutionsSelect.appendChild(option)
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
injectInstitutionsForm()
injectFormOldValues()

makeLateralMenu('create-donation')
