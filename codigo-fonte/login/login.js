const registerDonatorCol = document.getElementById('register-donator-col')
const registerInstitutionCol = document.getElementById(
    'register-institution-col'
)

const changeForm = (form) => {
    if (form === 'institution') {
        registerDonatorCol.classList.add('d-none')
        registerInstitutionCol.classList.remove('d-none')
    } else {
        registerInstitutionCol.classList.add('d-none')
        registerDonatorCol.classList.remove('d-none')
    }
}
