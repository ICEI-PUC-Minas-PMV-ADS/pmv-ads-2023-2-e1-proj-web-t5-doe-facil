if (!localStorage.getItem('PREFIX_URL')) {
    localStorage.setItem('PREFIX_URL', '/codigo-fonte/')
}

const PREFIX_URL = localStorage.getItem('PREFIX_URL')

const linkList = [
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

const lateralMenuList = [
    {
        label: 'Minhas Doações',
        tag: 'donations',
        href: 'dashboard/donations',
    },
    {
        label: 'Meu Perfil',
        tag: 'profile',
        href: 'dashboard/profile',
    },
    {
        label: 'Fazer Doações',
        tag: 'create-donation',
        href: 'dashboard/donations/create/',
    },
    {
        label: 'Sair',
        tag: 'exit',
        href: '',
    },
]

function setAttributeList(node, list) {
    for (const attribute of list) {
        node.setAttribute(attribute[0], attribute[1])
    }
}

function $g_makeMenu() {
    const menu = document.querySelector('#menu')

    if (!menu) return

    const navbar = document.createElement('nav')
    navbar.classList = 'navbar navbar-expand-lg bg-body-tertiary custom-navbar'
    setAttributeList(navbar, [['data-bs-theme', 'dark']])

    const container = document.createElement('div')
    container.classList.add(['container'])

    const navbarBrand = document.createElement('a')
    navbarBrand.classList.add(['navbar-brand'])
    navbarBrand.textContent = 'Doe Fácil'

    const navbarToggle = document.createElement('button')

    navbarToggle.classList = 'navbar-toggler'
    navbarToggle.type = 'button'

    setAttributeList(navbarToggle, [
        ['data-bs-toggle', 'collapse'],
        ['data-bs-target', '#principal-menu'],
        ['aria-controls', 'principal-menu'],
        ['aria-expanded', 'false'],
        ['aria-label', 'Toggle navigation'],
    ])

    const navbarColapse = document.createElement('div')
    navbarColapse.classList = 'collapse navbar-collapse'
    navbarColapse.id = 'principal-menu'

    const navbarUl = document.createElement('ul')
    navbarUl.classList = 'navbar-nav'

    for (const link of linkList) {
        navbarUl.appendChild(
            makeMenuLink(
                link.href,
                link.label,
                link.active,
                link.type,
                link.items,
                link.class
            )
        )
    }

    const accessButton = document.createElement('button')
    accessButton.classList = 'btn btn-primary custom--primary'
    accessButton.textContent = 'Acessar'

    accessButton.addEventListener('click', () => {
        window.location.replace(PREFIX_URL + 'login')
    })

    navbarColapse.appendChild(navbarUl)

    container.appendChild(navbarBrand)
    container.appendChild(navbarToggle)
    container.appendChild(navbarColapse)
    container.appendChild(accessButton)

    navbar.appendChild(container)
    menu.appendChild(navbar)
}

function makeNavLink(href, label, active, dropdown, className) {
    const link = document.createElement('a')
    link.href = PREFIX_URL + href
    link.textContent = label
    link.classList = dropdown ? 'dropdown-item' : 'nav-link'
    if (active) link.classList.add('active')
    if (className) link.classList.add(className)
    return link
}

function makeMenuLink(
    href,
    label,
    active,
    type = '',
    subLinks = [],
    className
) {
    if (type === 'dropdown') {
        const liDropdown = document.createElement('li')
        liDropdown.classList = 'nav-item dropdown'

        const dropdownToggle = document.createElement('a')
        dropdownToggle.href = '#'
        dropdownToggle.classList = 'nav-link dropdown-toggle'

        setAttributeList(dropdownToggle, [
            ['role', 'button'],
            ['data-bs-toggle', 'dropdown'],
            ['aria-expanded', 'false'],
        ])

        dropdownToggle.textContent = label

        const dropdownUl = document.createElement('ul')
        dropdownUl.classList = 'dropdown-menu'

        for (const link of subLinks) {
            dropdownUl.appendChild(
                makeMenuLink(link.href, link.label, link.active, link.type)
            )
        }

        liDropdown.appendChild(dropdownToggle)
        liDropdown.appendChild(dropdownUl)

        return liDropdown
    }

    const li = document.createElement('li')
    if (type === 'sub') li.appendChild(makeNavLink(href, label, active, true))
    else li.appendChild(makeNavLink(href, label, active, false, className))

    return li
}

const $g_makeLateralMenu = (activeItem) => {
    const lateralMenu = document.getElementById('navbar-links')
    if (!lateralMenu) return

    lateralMenu.classList.add('list-group')

    for (const item of lateralMenuList) {
        const link = document.createElement('a')
        link.classList = 'list-group-item list-group-item-action'

        if (activeItem === item.tag) link.classList.add('active')

        link.id = `lateral-${item.tag}`
        link.textContent = item.label
        link.href = PREFIX_URL + item.href

        lateralMenu.appendChild(link)
    }

    const buttonExit = lateralMenu.querySelector('#lateral-exit')

    if (buttonExit) {
        buttonExit.addEventListener('click', (e) => {
            e.preventDefault()
            $g_clearSession()
            $g_checkSession()
        })
    }
}

function $g_makeFooter() {}

const $g_getAllUsers = () => {
    return JSON.parse(localStorage.getItem('users'))
}

const $g_getSession = () => {
    return JSON.parse(localStorage.getItem('session'))
}

const $g_createSession = (id, type) => {
    localStorage.setItem('session', JSON.stringify({ id, type }))
}

const $g_clearSession = () => {
    localStorage.removeItem('session')
}

const $g_redirectTo = (path) => {
    window.location = PREFIX_URL + path
}

const $g_checkSession = () => {
    if (!$g_getSession()) {
        $g_redirectTo('login')
    }
}

const $g_handleUsersEmpty = () => {
    localStorage.clear()
    $g_checkSession()
}

const $g_getSessionUser = () => {
    const session = $g_getSession()
    const users = $g_getAllUsers()

    if (!users) return $g_handleUsersEmpty()

    const [user] = users.filter((user) => user.id === session.id)
    return user
}

const $g_getInstitutions = () => {
    const users = $g_getAllUsers()

    if (!users) return $g_handleUsersEmpty()

    return users
        .filter((user) => user.type === 'institution')
        .map((i) => i.name)
}

$g_makeMenu()
