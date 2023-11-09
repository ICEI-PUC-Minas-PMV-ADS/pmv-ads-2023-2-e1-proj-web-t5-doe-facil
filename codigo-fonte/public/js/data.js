'use strict'

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

