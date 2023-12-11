'use strict';
import {
    donatorValidationsForm,
    institutionValiationsForm,
} from '../../../login/js/data.js'

export const donatorProfileValidations = donatorValidationsForm.filter((v) => !v.id.includes('password'))
export const institutionProfileValidations = institutionValiationsForm.filter((v) => !v.id.includes('password'))