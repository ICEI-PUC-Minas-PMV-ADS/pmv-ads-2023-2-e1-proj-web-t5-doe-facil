"use strict";

import { $g_makeLateralMenu } from "../../../../public/js/components.js";
import { $g_saveDonationDraft } from "../../../../public/js/donation.js";
import { $g_checkDonatorPermissions } from "../../../../public/js/permissions.js";

import { addDonationFields, getFormInputs, submitForm } from "./form.js";
import { DonationForm } from "./lifecycles.js";

$g_checkDonatorPermissions("dashboard/donations/create");
$g_makeLateralMenu("create-donation");

const donationForm = new DonationForm();
donationForm.mount();

donationForm.elementForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm(getFormInputs());
});

donationForm.elementForm
    .querySelector("#add-donation-item")
    .addEventListener("click", (e) => {
        e.preventDefault();
        addDonationFields(donationForm.donationElementField);
    });

const draftButton = donationForm.elementForm.querySelector("#draft");
if (draftButton) {
    draftButton.addEventListener("click", (e) => {
        e.preventDefault();
        $g_saveDonationDraft(getFormInputs());
    });
}
