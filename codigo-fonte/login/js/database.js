'use strict'

const usersSeed = () => {
    return [
        {
            address: 'Rua do Exemplo',
            address_complement: 'Apt 872',
            address_number: '543',
            birthdate: '2000-10-13',
            cep: '38770-000',
            cpf: '123.456.789-10',
            email: 'donator@test.com',
            id: createNewId(),
            name: 'Doador da Silva Sauro',
            neighborhood: 'Centro',
            password: '1234',
            type: 'donator',
        },
        {
            address: 'Avenida do Exemplo',
            address_complement: 'Apt 123',
            address_number: '543',
            cep: '38770-000',
            cnpj: '55.213.172/0001-35',
            email: 'institution@test.com',
            id: createNewId(),
            name: 'Instituição de Caridade Exemplo',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            neighborhood: 'Centro',
            password: '1234',
            type: 'institution',
            types: ['brinquedos', 'roupas', 'outro']
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
    $g_updateUsers(table)
}

export const registerUser = (user) => {
    let users = JSON.parse(localStorage.getItem('users'))

    if (!users) {
        createUsersTable()
        return registerUser(user)
    }

    user.id = createNewId()
    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))
    return user
}

export const validateLogin = (payload) => {
    const users = $g_getAllUsers()
    const user = users.find(
        (u) => u.email === payload.email && u.password === payload.password
    )

    if (!user) throw new Error('Usuário ou senha inválidos.')

    return user
}
