"use strict";

import { $g_makeLateralMenu } from "../../../../public/js/components.js";
import { $g_saveDonationDraft } from "../../../../public/js/donation.js";
import { $g_checkDonatorPermissions } from "../../../../public/js/permissions.js";
import { $g_addValidationElementWatch } from "../../../../public/js/validations.js";

import { addDonationFields, getFormInputs, submitForm } from "./form.js";
import { DonationForm } from "./lifecycles.js";

const params = new URLSearchParams(window.location.search);
const institutionId = params.get("institutionId");

$g_checkDonatorPermissions(
    `dashboard/donations/create${
        institutionId ? `/?institutionId=${institutionId}` : ""
    }`
);

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

$g_addValidationElementWatch([
    { id: "name", type: "minMax", label: "Nome", min: 3, max: 30 },
    { id: "cpf", type: "cpf" },
    { id: "email", type: "email" },
    {
        id: "address",
        type: "minMax",
        label: "Endereço",
        min: 8,
        max: 60,
        short: true,
    },
    {
        id: "neighborhood",
        type: "minMax",
        label: "Bairro",
        min: 3,
        max: 30,
    },
    { id: "cep", type: "cep" },
    { id: "phone", type: "phone" },
]);

const collectionDate = document.getElementById("collection_date");
const finishCollectionDate = document.getElementById("finish_collection_date");

collectionDate.min = new Date().toISOString().split("T")[0];
finishCollectionDate.min = collectionDate.min;

collectionDate.addEventListener("input", () => {
    finishCollectionDate.value = "";
    finishCollectionDate.min = collectionDate.value;
});

const fromHour = document.getElementById("from_hour");
const untilHour = document.getElementById("until_hour");
fromHour.min = "06:00";
fromHour.max = "18:00";

fromHour.addEventListener("input", () => {
    untilHour.value = "";
    untilHour.min = fromHour.value;
});
