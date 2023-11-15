'use strict'

import { _createNewId } from './database.js'

export const linkList = [
    {
        label: 'Página Inicial',
        href: '#',
        active: true,
        type: 'link',
    },
    {
        label: 'Sobre Nós',
        href: 'about',
        active: false,
        type: 'link',
    },

    {
        label: 'Instituições',
        href: 'institutions',
        active: false,
        type: 'link',
    },
    {
        label: 'Sobre a Instituição',
        href: 'institutions/about',
        active: false,
        type: 'link',
    },
    {
        label: 'Dashboard',
        href: '#',
        active: false,
        type: 'dropdown',
        items: [
            {
                label: 'Doações',
                href: 'dashboard/donations',
                active: false,
                type: 'sub',
            },
            {
                label: 'Análise da Doação',
                href: 'dashboard/donations/review',
                active: false,
                type: 'sub',
            },
            {
                label: 'Cadastro Doações',
                href: 'dashboard/donations/create',
                active: false,
                type: 'sub',
            },
            {
                label: 'Perfil',
                href: 'dashboard/profile',
                active: false,
                type: 'sub',
            },
        ],
    },
]

export const lateralMenuList = [
    {
        label: 'Minhas Doações',
        tag: 'donations',
        href: 'dashboard/donations',
        permission: 'all',
    },
    {
        label: 'Depoimentos',
        tag: 'testimony',
        href: 'dashboard/testimony',
        permission: 'all',
    },
    {
        label: 'Meu Perfil',
        tag: 'profile',
        href: 'dashboard/profile',
        permission: 'all',
    },
    {
        label: 'Fazer Doações',
        tag: 'create-donation',
        href: 'dashboard/donations/create/',
        permission: 'donator',
    },
    {
        label: 'Sair',
        tag: 'exit',
        href: '',
        permission: 'all',
    },
]

export const _usersSeed = () => {
    return [
        {
            id: _createNewId('user'),
            name: 'Administrador',
            email: 'admin@test.com',
            password: '1234',
            type: 'admin',
        },
        {
            id: _createNewId('user'),
            address: 'Rua do Exemplo',
            address_complement: 'Apt 872',
            address_number: '543',
            birthdate: '2000-10-13',
            cep: '38770-000',
            cpf: '123.456.789-10',
            email: 'donator@test.com',
            name: 'Doador da Silva Sauro',
            neighborhood: 'Centro',
            password: '1234',
            type: 'donator',
        },
        {
            id: _createNewId('user'),
            address: 'Avenida do Exemplo',
            address_complement: 'Apt 123',
            address_number: '543',
            cep: '38770-000',
            cnpj: '55.213.172/0001-35',
            email: 'institution@test.com',
            name: 'Instituição de Caridade Exemplo',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            neighborhood: 'Centro',
            password: '1234',
            type: 'institution',
            types: ['brinquedos', 'roupas', 'outro'],
        },
    ]
}
