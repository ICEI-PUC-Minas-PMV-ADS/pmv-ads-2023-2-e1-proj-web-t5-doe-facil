'use strict'

import { lateralMenuList, linkList } from './data.js'

import { PREFIX_URL } from './global.js'
import {
    $g_checkSession,
    $g_clearSession,
    $g_getSessionUser,
} from './session.js'


function setAttributeList(node, list) {
    for (const attribute of list) {
        node.setAttribute(attribute[0], attribute[1])
    }
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

export function $g_makeMenu() {
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


export const $g_makeLateralMenu = (activeItem) => {
    const user = $g_getSessionUser()
    const lateralMenu = document.getElementById('navbar-links')
    if (!lateralMenu) return

    const lateralMenuListFiltered = lateralMenuList.filter((i) =>
        ['all', user.type].includes(i.permission)
    )

    lateralMenu.classList.add('list-group')

    for (const item of lateralMenuListFiltered) {
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

export function $g_makeFooter() {
    const footer = document.querySelector('#footer')
    footer.classList.add('footer__container')
    footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 pb-4 footer__info">
                    <h3 class="footer__title">Navegação</h3>
                    <ul class="footer__links">
                        <li><a href="#">Quero doar!</a></li>
                        <li><a href="#">Instituições</a></li>
                        <li><a href="#">Sobre nós</a></li>
                    </ul>
                </div>

                <div class="col-12 col-lg-4 pb-4 footer__info">
                    <h3 class="footer__title">Suporte</h3>
                    <ul class="footer__links">
                        <li><a href="#">Encontrou algum problema?</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Termos de uso</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Ajuda</a></li>
                    </ul>
                </div>

                <div class="col-12 col-lg-4 pb-4 footer__info">
                    <h3 class="footer__title">Sobre nós</h3>
                    <p>
                        Idealizada no ano de 2023, a Doe Fácil! é uma
                        aplicação que tem o objetivo de ser um facilitador
                        para pessoas que têm o desejo de doar algo e
                        instituições que precisam receber doações...
                    </p>
                    <a href="#" class="footer__about">Saiba mais sobre nós!</a>
                </div>

                <div class="col-12 footer__copyright">
                    <p>
                        Copyright © 2023 - 2023 Doe Fácil! Company, LLC.
                        Todos os direitos reservados. Doe Fácil! Unindo você
                        às Instituições de Caridade da sua região!
                    </p>
                </div>
            </div>
        </div>
    `
}