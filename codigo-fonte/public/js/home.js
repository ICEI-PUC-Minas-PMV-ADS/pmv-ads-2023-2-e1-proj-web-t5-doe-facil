'use strict'

export const $g_getHomeCardsInfo = () => {
    return [
        {
            title: 'Instituições',
            description:
                'Venha conhecer nossas Instituições parceiras! Nesta seção, você poderá descobrir o trabalho maravilhoso que elas fazem e de que forma você pode ajudar!',
            button: 'secondary',
            buttonText: 'Conhecer Instituições',
        },

        {
            title: 'Sobre Nós',
            description:
                'Nascemos para facilitar a vida de quem deseja ajudar o próximo, mas nem sempre tem tempo de ir até uma Instituição ou, às vezes, nem mesmo conh...',
            button: 'secondary',
            buttonText: 'Saiba Mais',
        },

        {
            title: 'Seja Um Doador',
            description: '',
            button: 'primary',
            buttonText: 'Fazer Doação!',
        },
    ]
}

export const $g_makeHomeCards = () => {
    const homeCards = document.querySelector('#home-cards')

    const cardList = $g_getHomeCardsInfo()

    for (const cardItem of cardList) {
        const card = document.createElement('div')
        card.classList = 'col-lg-4'
        card.innerHTML = `
<section class="card__item">
    <div class="card__header">
        <h2 class="card__title">${cardItem.title}</h2>

        <img
            src="public/img/Doacoes.png"
            alt="Doações Caixa"
        />
    </div>
    <div class="card__footer">
        <p>${cardItem.description}</p>
        <button
            class="btn btn-${cardItem.button} custom--${cardItem.button} btn--custom btn--100"
        >
            ${cardItem.buttonText}
            </button>
    </div>
</section>
`
        homeCards.appendChild(card)
    }
}
