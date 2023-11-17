import { $g_redirectTo } from '../../../../public/js/global.js'
import {
    $g_checkSession,
    $g_sessionUserIsDonator,
} from '../../../../public/js/session.js'
import { injectInstitutionsOptions, resetDonationFields } from './form.js'
import { injectFormDraft } from './draft.js'

export const mountForm = () => {
    const donationElementField = document
        .querySelectorAll('#donation-form .donation_fields')[0]
        .cloneNode(true)

    injectInstitutionsOptions()
    resetDonationFields(donationElementField)
    injectFormDraft(donationElementField)

    return { donationElementField }
}

export const checkPermissions = () => {
    $g_checkSession()
    if (!$g_sessionUserIsDonator()) $g_redirectTo('dashboard/donations')
}
