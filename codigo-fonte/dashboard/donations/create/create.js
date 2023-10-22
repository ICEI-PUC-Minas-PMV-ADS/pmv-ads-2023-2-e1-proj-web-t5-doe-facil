const donationForm = document.querySelector('#donation-form')
const formValues = JSON.parse(localStorage.getItem('donation-values'))

for (input of formValues) {
    donationForm.querySelector(`#${input.input}`).value = input.value
}

const donationListRow = donationForm.querySelector('#donation-items')

const donationItemsList = donationListRow.querySelectorAll('.donation_item')
const donationExample = donationItemsList[0].cloneNode(true)

donationListRow.removeChild(donationListRow.querySelector('.donation_item'))

const addDonationFields = () => {
    const donationItemsList = donationListRow.querySelectorAll('.donation_item')
    const donationNumber = donationItemsList.length + 1

    const donationClone = donationExample.cloneNode(true)
    donationListRow.appendChild(donationClone)

    const donationRemove = donationClone.querySelector('.donation_remove')

    if (donationNumber === 1) {
        donationRemove.style.display = 'none'
        return
    }

    donationRemove.addEventListener('click', (e) => {
        e.preventDefault()
        donationListRow.removeChild(donationClone)
    })
}

addDonationFields()

const addDonationItemButton = donationForm.querySelector('#add-donation-item')

addDonationItemButton.addEventListener('click', (e) => {
    e.preventDefault()
    addDonationFields()
})

donationForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formInputs = donationForm.querySelectorAll('.form_item')
    const formValues = [...formInputs].map((input) => ({
        input: input.id,
        value: input.value,
    }))

    localStorage.setItem('donation-values', JSON.stringify(formValues))
})
