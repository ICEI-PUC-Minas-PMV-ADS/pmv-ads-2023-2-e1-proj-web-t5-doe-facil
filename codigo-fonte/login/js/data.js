export const donatorValidationsForm = [
    { id: 'donator_name', type: 'minMax', label: 'Nome', min: 3, max: 30 },
    { id: 'donator_cpf', type: 'cpf' },
    { id: 'donator_email', type: 'email' },
    {
        id: 'donator_address',
        type: 'minMax',
        label: 'Endereço',
        min: 8,
        max: 60,
        short: true,
    },
    {
        id: 'donator_neighborhood',
        type: 'minMax',
        label: 'Bairro',
        min: 3,
        max: 30,
    },
    { id: 'donator_cep', type: 'cep' },
    { id: 'donator_phone', type: 'phone' },
    {
        id: 'donator_password',
        type: 'minMax',
        label: 'Senha',
        min: 8,
        max: 60,
    },
]

export const institutionValiationsForm = [
    { id: 'institution_name', type: 'minMax', label: 'Nome', min: 3, max: 30 },
    { id: 'institution_cnpj', type: 'cnpj' },
    { id: 'institution_email', type: 'email' },
    {
        id: 'institution_address',
        type: 'minMax',
        label: 'Endereço',
        min: 8,
        max: 60,
        short: true,
    },
    {
        id: 'institution_neighborhood',
        type: 'minMax',
        label: 'Bairro',
        min: 3,
        max: 30,
    },
    { id: 'institution_cep', type: 'cep' },
    { id: 'institution_phone', type: 'phone' },
    {
        id: 'institution_password',
        type: 'minMax',
        label: 'Senha',
        min: 8,
        max: 60,
    },
]
