"use strict";

import { _createNewId } from "./database.js";

export const linkList = [
    {
        label: "Página Inicial",
        href: "#",
        active: true,
        type: "link",
    },
    {
        label: "Sobre Nós",
        href: "about",
        active: false,
        type: "link",
    },
    {
        label: "Instituições",
        href: "institutions",
        active: false,
        type: "link",
    },
];

export const lateralMenuList = [
    {
        label: "Painel Geral",
        tag: "general",
        href: "dashboard/general",
        permission: "admin",
    },
    {
        label: "Sobre Nós",
        tag: "about",
        href: "dashboard/about",
        permission: "admin",
    },
    {
        label: "Minhas Doações",
        tag: "donations",
        href: "dashboard/donations",
        permission: "all",
    },
    {
        label: "Doações Públicas",
        tag: "public-donations",
        href: "dashboard/donations/?public=1",
        permission: ["admin", "institution"],
    },
    {
        label: "Depoimentos",
        tag: "testimony",
        href: "dashboard/testimony",
        permission: "all",
    },
    {
        label: "Meu Perfil",
        tag: "profile",
        href: "dashboard/profile",
        permission: "all",
    },
    {
        label: "Fazer Doações",
        tag: "create-donation",
        href: "dashboard/donations/create/",
        permission: "donator",
    },
    {
        label: "Sair",
        tag: "exit",
        href: "",
        permission: "all",
    },
];

export const _usersSeed = () => {
    return [
        {
            id: _createNewId("user"),
            name: "Administrador",
            email: "admin@test.com",
            password: "1234",
            type: "admin",
        },
        {
            id: _createNewId("user"),
            name: "Joana Silva",
            email: "joana.silva@gmail.com",
            password: "senha123",
            birthdate: "1995-05-20",
            cpf: "987.654.321-00",
            address: "Rua das Flores",
            address_complement: "Bloco C",
            address_number: "123",
            cep: "12345-678",
            phone: "(11) 98765-4321",
            neighborhood: "Jardim Esperança",
            type: "donator",
        },
        {
            id: _createNewId("user"),
            name: "Marcos Oliveira",
            email: "marcos.oliveira@yahoo.com",
            password: "marcos2023",
            birthdate: "1988-12-10",
            cpf: "456.789.123-45",
            address: "Avenida Principal",
            address_complement: "Casa 2",
            address_number: "567",
            cep: "54321-090",
            phone: "(99) 55555-1234",
            neighborhood: "Centro Comercial",
            type: "donator",
        },
        {
            id: _createNewId("user"),
            name: "Laura Santos",
            email: "laura.santos@outlook.com",
            password: "laura123",
            birthdate: "1990-08-25",
            cpf: "111.222.333-44",
            address: "Rua da Amizade",
            address_complement: "Apt 501",
            address_number: "789",
            cep: "98765-432",
            phone: "(77) 98765-4321",
            neighborhood: "Bairro Feliz",
            type: "donator",
        },
        {
            id: _createNewId("user"),
            name: "Rafaela Costa",
            email: "rafaela.costa@live.com",
            password: "rafa2023",
            birthdate: "1985-04-15",
            cpf: "222.333.444-55",
            address: "Avenida das Palmeiras",
            address_complement: "Bloco A",
            address_number: "321",
            cep: "54321-987",
            phone: "(99) 12345-6789",
            neighborhood: "Vila Esperança",
            type: "donator",
        },
        {
            id: _createNewId("user"),
            image: "../public/img/amor_e.jpg",
            name: "Associação Amor e Esperança",
            email: "contato@amoresperanca.org",
            password: "abcd",
            cnpj: "12.345.678/0001-99",
            address: "Avenida da Solidariedade",
            address_complement: "Sala 202",
            address_number: "123",
            neighborhood: "Bairro Feliz",
            cep: "12345-678",
            phone: "(11) 98765-4321",
            description:
                "A Associação Amor e Esperança é uma instituição dedicada a proporcionar educação e cuidados médicos a crianças carentes, visando um futuro mais digno e promissor para essas crianças e suas famílias.",
            role: "Promover educação e saúde para crianças carentes é a nossa missão na comunidade.",
            type: "institution",
            types: [
                "brinquedos",
                "roupas",
                "calçados",
                "outro",
            ],
        },
        {
            id: _createNewId("user"),
            image: "../public/img/mao_so.jpg",
            name: "Fundação Mãos Solidárias",
            email: "contato@maossolidarias.org",
            password: "senha123",
            cnpj: "98.765.432/0001-11",
            address: "Rua das Oportunidades",
            address_complement: "",
            address_number: "987",
            neighborhood: "Vila Generosa",
            cep: "54321-090",
            phone: "(99) 55555-1234",
            description:
                "A Fundação Mãos Solidárias visa proporcionar oportunidades de capacitação profissional e assistência social para comunidades desfavorecidas, buscando criar um ambiente inclusivo e promover o desenvolvimento sustentável.",
            role: "Contribuir para a inclusão e o desenvolvimento social é nossa missão.",
            type: "institution",
            types: [
                "brinquedos",
                "roupas",
                "calçados",
                "cama-e-banho",
                "outro",
            ],
        },
        {
            id: _createNewId("user"),
            image: "../public/img/ce_hum.jpg",
            name: "Centro de Ajuda Humanitária",
            email: "contato@ajudahumanitaria.org",
            password: "ch@2023",
            cnpj: "77.123.456/0001-22",
            address: "Travessa da Solidariedade",
            address_complement: "Bloco B",
            address_number: "567",
            neighborhood: "Cidade Solidária",
            cep: "76543-210",
            phone: "(88) 12345-6789",
            description:
                "O Centro de Ajuda Humanitária tem como objetivo oferecer auxílio emergencial, alimentos e abrigo temporário para pessoas vulneráveis em momentos de desastres naturais e crises humanitárias.",
            role: "Proporcionar ajuda emergencial e abrigo é nosso compromisso com a comunidade.",
            type: "institution",
            types: [
                "brinquedos",
                "roupas",
                "calçados",
                "cama-e-banho",
                "outro",
            ],
        },
        {
            id: _createNewId("user"),
            image: "../public/img/ins_so.jpg",
            name: "Instituto Esperança Solidária",
            email: "contato@esperancasolidaria.org",
            password: "es2023",
            cnpj: "11.222.333/0001-44",
            address: "Avenida da Generosidade",
            address_complement: "Andar 5",
            address_number: "789",
            neighborhood: "Vila Esperança",
            cep: "98765-432",
            phone: "(77) 98765-4321",
            description:
                "O Instituto Esperança Solidária busca promover assistência social e educacional, trabalhando para construir um futuro mais inclusivo e próspero para todos os membros da comunidade carente.",
            role: "Nossa missão é promover assistência social e educacional na comunidade.",
            type: "institution",
            types: [
                "brinquedos",
                "roupas",
                "calçados",
                "cama-e-banho",
                "outro",
            ],
        },
        {
            id: _createNewId("user"),
            image: "../public/img/as_fe.jpg",
            name: "Associação Sorriso Feliz",
            email: "contato@sorrisofeliz.org",
            password: "feliz2023",
            cnpj: "55.666.777/0001-88",
            address: "Rua da Alegria",
            address_complement: "",
            address_number: "321",
            neighborhood: "Cidade Alegre",
            cep: "54321-987",
            phone: "(99) 12345-6789",
            description:
                "A Associação Sorriso Feliz se dedica a proporcionar momentos de alegria e apoio emocional para crianças hospitalizadas, buscando tornar o tratamento médico mais humanizado e acolhedor.",
            role: "Proporcionar apoio emocional e alegria para crianças hospitalizadas é nossa missão.",
            type: "institution",
            types: [
                "brinquedos",
                "roupas",
                "calçados",
                "cama-e-banho",
                "outro",
            ],
        },
        {
            id: _createNewId("user"),
            image: "../public/img/ca_es.jpg",
            name: "Casa da Esperança",
            email: "contato@casadaesperanca.org",
            password: "esperanca2023",
            cnpj: "88.999.777/0001-66",
            address: "Avenida da Paz",
            address_complement: "Sala 10",
            address_number: "789",
            neighborhood: "Bairro da Paz",
            cep: "12345-678",
            phone: "(11) 98765-4321",
            description:
                "A Casa da Esperança é um abrigo que acolhe crianças e adolescentes em situação de vulnerabilidade, proporcionando cuidados, educação e apoio para um futuro melhor.",
            role: "Oferecer acolhimento e oportunidades para crianças em situação de vulnerabilidade.",
            type: "institution",
            types: [
                "brinquedos",
                "roupas",
                "calçados",
                "cama-e-banho",
                "outro",
            ],
        },
    ];
};

export const _firstSeed = () => {
    return {
        title: "Sua Doação é Importante!",
        description: `Fortaleça as Instituições de Caridade da Sua Região! <br><br> <strong>Atenção:</strong> Essa aplicação foi desenvolvida para um <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-doe-facil" target=\"_blank\">projeto de faculdade</a>, ou seja, o cadastros de usuários e doações não terão reflexo na vida real.`,
        image: "public/img/logo.png",
        button: "Quero me tornar um Doador",
        button_type: "secondary",
        button_href: "login",
    };
};

export const _aboutSeed = () => {
    return {
        title: "Sobre a Doe Fácil",
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
        image: "../public/img/logo.png",
        button: "Seja um Doador",
        button_type: "secondary",
        button_href: "dashboard/donations/create",
    };
};

export const _cardSeed = () => {
    return [
        {
            id: _createNewId("card"),
            title: "Instituições",
            image: "public/img/donate_1.png",
            description:
                "Venha conhecer nossas Instituições parceiras! Nesta seção, você poderá descobrir o trabalho maravilhoso que elas fazem e de que forma você pode ajudar!",
            button_label: "Conhecer Instituições",
            button_type: "secondary",
            button_href: "institutions",
            type: "home",
        },

        {
            id: _createNewId("card"),
            title: "Sobre Nós",
            image: "public/img/donate_2.png",
            description:
                "Nascemos para facilitar a vida de quem deseja ajudar o próximo, mas nem sempre tem tempo de ir até uma Instituição ou, às vezes, nem mesmo conh...",
            button_label: "Saiba Mais!",
            button_type: "secondary",
            button_href: "about",
            type: "home",
        },

        {
            id: _createNewId("card"),
            title: "Seja Um Doador",
            image: "public/img/donate_4.png",
            description: "",
            button_label: "Fazer Doação!",
            button_type: "primary",
            button_href: "dashboard/donations/create",
            type: "home",
        },
    ];
};

export const _testimonySeed = () => [
    {
        id: _createNewId("testimony"),
        text: "A experiência ao usar a aplicação de doações foi incrível! A interface é intuitiva, o que torna muito simples encontrar instituições de caridade para apoiar. A variedade de causas é impressionante, o que me permitiu escolher aquela que mais ressoa comigo. Além disso, o processo de doação é rápido e seguro. Estou feliz por poder contribuir de forma tão fácil para causas que acredito.",
        author: 2,
    },
    {
        id: _createNewId("testimony"),
        text: "Estou bastante satisfeito com a aplicação de doações. Encontrei diversas instituições e projetos que realmente fazem a diferença. O que mais me impressionou foi a transparência das informações fornecidas sobre como o dinheiro é utilizado por cada instituição. Isso me deu confiança para doar sabendo que meu apoio está sendo bem direcionado.",
        author: 3,
    },
    {
        id: _createNewId("testimony"),
        text: "A aplicação de doações é uma ferramenta maravilhosa para quem deseja fazer a diferença. A facilidade de navegação e a diversidade de opções de caridade são ótimas. Além disso, o acompanhamento do impacto das doações é bastante informativo. Sinto-me conectado e parte do impacto positivo que cada doação proporciona.",
        author: 4,
    },
];
