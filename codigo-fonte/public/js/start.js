import { $g_createCardsTable } from './cards.js'
import { $g_createPagesInfoTable } from './pagesInfo.js'
import { $g_createUsersTable } from './user.js'

export const $g_startApp = () => {
    $g_createUsersTable()
    $g_createPagesInfoTable()
    $g_createCardsTable()
}
