'use strict'

import { $g_redirectTo } from './global.js'
import { $g_getSessionUserType, $g_sessionUserIsAdmin } from './session.js'

export const $g_checkAdminPermissions = (redirect = '') => {
    if (!$g_sessionUserIsAdmin()) $g_redirectTo('login', redirect ? { redirect } : null)
}

export const $g_checkDonatorPermissions = (redirect = '') => {
    if (['admin', 'donator'].includes($g_getSessionUserType())) return
    $g_redirectTo('login', redirect ? { redirect } : null)
}

export const $g_checkInstitutionPermissions = (redirect = '') => {
    if (['admin', 'institution'].includes($g_getSessionUserType())) return
    $g_redirectTo('login', redirect ? { redirect } : null)
}

export const $g_checkPermissions = (redirect = '') => {
    if (['admin', 'donator', 'institution'].includes($g_getSessionUserType()))
        return
    $g_redirectTo('login', redirect ? { redirect } : null)
}
