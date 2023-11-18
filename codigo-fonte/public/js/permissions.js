'use strict'

import { $g_redirectTo } from './global.js'
import {
    $g_sessionUserIsAdmin,
    $g_sessionUserIsDonator,
    $g_sessionUserIsInstitution,
} from './session.js'

const url = 'login'

export const $g_checkAdminPermissions = () => {
    if (!$g_sessionUserIsAdmin()) $g_redirectTo(url)
}
export const $g_checkDonatorPermissions = () => {
    if ($g_sessionUserIsAdmin()) return
    if (!$g_sessionUserIsDonator()) $g_redirectTo(url)
}

export const $g_checkInstitutionPermissions = () => {
    if ($g_sessionUserIsAdmin()) return
    if (!$g_sessionUserIsInstitution()) $g_redirectTo(url)
}
