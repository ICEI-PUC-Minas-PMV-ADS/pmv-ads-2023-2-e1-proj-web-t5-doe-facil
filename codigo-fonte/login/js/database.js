'use strict'

const usersSeed = () => {
    return [
        {
            address: 'Rua Exemplo',
            address_complement: 'Apartamento 123',
            address_number: '543',
            birthdate: '2000-10-13',
            cep: '38770-000',
            cpf: '123.456.789-10',
            email: 'donator@test.com',
            id: createNewId(),
            name: 'Doador Exemplo',
            neighborhood: 'Centro',
            password: '1234',
            type: 'donator',
        },
        {
            address: 'Rua Exemplo',
            address_complement: 'Apartamento 123',
            address_number: '543',
            cep: '38770-000',
            cnpj: '55.213.172/0001-35',
            email: 'institution@test.com',
            id: createNewId(),
            name: 'Doador Exemplo',
            neighborhood: 'Centro',
            password: '1234',
            type: 'institution',
        },
    ]
}

const createNewId = () => {
    let lastId = parseInt(localStorage.getItem(`last_user_id`))

    if (!lastId) lastId = 1
    else lastId += 1

    localStorage.setItem(`last_user_id`, lastId)
    return lastId
}

export const createUsersTable = () => {
    let table = JSON.parse(localStorage.getItem('users'))
    if (!table) table = usersSeed()
    localStorage.setItem('users', JSON.stringify(table))
}

export const registerUser = (user) => {
    let table = JSON.parse(localStorage.getItem('users'))

    if (!table) {
        createUsersTable()
        return registerUser(user)
    }

    user.id = createNewId()
    table.push(user)

    localStorage.setItem('users', JSON.stringify(table))
}

export const getAllUsers = () => {
    return JSON.parse(localStorage.getItem('users'))
}

export const validateLogin = (payload) => {
    const users = getAllUsers()
    const user = users.find(
        (u) => u.email === payload.email && u.password === payload.password
    )

    if (!user) throw new Error('Usuário ou senha inválidos.')

    return user
}
