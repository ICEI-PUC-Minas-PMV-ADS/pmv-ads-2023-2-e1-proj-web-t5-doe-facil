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
        label: 'Painel Geral',
        tag: 'general',
        href: 'dashboard/general',
        permission: 'admin',
    },
    {
        label: 'Sobre Nós',
        tag: 'about',
        href: 'dashboard/about',
        permission: 'admin',
    },
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
            name: 'Doador da Silva Sauro',
            email: 'donator@test.com',
            password: '1234',
            birthdate: '2000-10-13',
            cpf: '123.456.789-10',
            address: 'Rua do Exemplo',
            address_complement: 'Apt 872',
            address_number: '543',
            cep: '38770-000',
            neighborhood: 'Centro',
            type: 'donator',
        },
        {
            id: _createNewId('user'),
            name: 'Instituto Casa do Caminho',
            email: 'casa.caminho@test.com',
            password: '1234',
            image: '../public/img/casa_do_caminho.png',
            cnpj: '55.213.172/0001-35',
            address: 'Avenida do Exemplo',
            address_complement: 'Apt 123',
            address_number: '543',
            neighborhood: 'Centro',
            cep: '38770-000',
            description:
                'O Instituto Casa do Caminho nasceu com o propósito de oferecer um acolhimento que pudesse ser transformador no enfrentamento da doença, além de ter como princípio uma gestão profissionalizada e um modelo autossustentável através dos bazares beneficentes.',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            type: 'institution',
            types: ['brinquedos', 'roupas', 'outro'],
        },
        {
            id: _createNewId('user'),
            name: 'Instituição de Caridade',
            email: 'institution@test.com',
            password: '1234',
            image: '../public/img/default.png',
            cnpj: '55.213.172/0001-35',
            address: 'Avenida do Exemplo',
            address_complement: 'Apt 123',
            address_number: '543',
            neighborhood: 'Centro',
            cep: '38770-000',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            type: 'institution',
            types: ['brinquedos', 'roupas', 'outro'],
        },
    ]
}

export const _firstSeed = () => {
    return {
        title: 'A Sua Doação é Importante!',
        description: 'Fortaleça as Insituições de Caridade da Sua Região!',
        image: 'public/img/logo.png',
        button: 'Quero me tornar um Doador',
        button_type: 'secondary',
        button_href: 'login',
    }
}

export const _aboutSeed = () => {
    return {
        title: 'Sobre a Doe Fácil',
        description: `Idealizada no ano de 2023, a Doe Fácil é uma aplicação que tem o objetivo de
            ser um facilitador para pessoas que têm o desejo de doar algo e instituições que precisam receber doações.
            Viemos com o intuito de auxiliar na conexão entre doadores e instituições sem fins lucrativos, na intenção de
            ajudar pessoas que queiram e tenham algo a doar, porém, não sabem quais lugares estão necessitando do bem a
            ser doado, bem como ajudar as instituições a alcançar mais doadores, apresentando a todos, a sua finalidade,
            suas necessidades e seu impacto na sociedade.`,
        sub_title: `Nosso papel na Sociedade`,
        role: `Ajudamos o maior número de Instituições sem fins lucrativos a receberem mais
            doações, auxiliar na visibilidade das mesmas e filtrar da melhor maneira possīvel suas necessidades, como
            principais doações necessárias no momento ou regularmente. Qualquer pessoa pode ser um doador, desta maneira,
            nossa plataforma auxilia na busca pela Instituição que melhor atende o doador em relação ao item a ser doado
            e à localização. Aumentando também o conhecimento de outras Instituições e seus objetivos.`,
        image: '../public/img/logo.png',
        button: 'Seja um Doador',
        button_type: 'secondary',
        button_href: 'dashboard/donations/create',
    }
}

export const _cardSeed = () => {
    return [
        {
            title: 'Instituições',
            image: 'public/img/donate_1.png',
            description:
                'Venha conhecer nossas Instituições parceiras! Nesta seção, você poderá descobrir o trabalho maravilhoso que elas fazem e de que forma você pode ajudar!',
            button: 'Conhecer Instituições',
            button_type: 'secondary',
            button_href: 'institutions',
            type: 'home',
        },

        {
            title: 'Sobre Nós',
            image: 'public/img/donate_2.png',
            description:
                'Nascemos para facilitar a vida de quem deseja ajudar o próximo, mas nem sempre tem tempo de ir até uma Instituição ou, às vezes, nem mesmo conh...',
            button: 'Saiba Mais!',
            button_type: 'secondary',
            button_href: 'about',
            type: 'home',
        },

        {
            title: 'Seja Um Doador',
            image: 'public/img/donate_1.png',
            description: '',
            button: 'Fazer Doação!',
            button_type: 'primary',
            button_href: 'dashboard/donations/create',
            type: 'home',
        },
    ]
}
