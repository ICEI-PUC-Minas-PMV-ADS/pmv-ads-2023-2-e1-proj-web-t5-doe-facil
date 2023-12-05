import { injectInstitutionsOptions, resetDonationFields } from "./form.js";
import { injectFormDraft } from "./draft.js";
import { $g_deleteDonationDraft, $g_getDonationById } from "../../../../public/js/donation.js";

export class DonationForm {
    elementForm;
    donationElementField;
    #pageParams;
    #donation = null;

    constructor() {
        this.elementForm = this.#getFormElement();
        this.donationElementField = this.#getDonationElementField();
        this.#pageParams = this.#getPageParams();

        if (this.#pageParams.id) {
            this.#donation = this.#getDonation();
        }
    }

    mount() {
        injectInstitutionsOptions();
        resetDonationFields(this.donationElementField);
        
        if (this.#pageParams.institutionId) {
            const institutionSelect = document.getElementById("institution");
            institutionSelect.value = this.#pageParams.institutionId;

            $g_deleteDonationDraft()
        }
        
        if (!this.#donation) return injectFormDraft(this.donationElementField);


        this.#addHiddenMetadataInputs();

        const draftCol = this.elementForm.querySelector("#draft-col");
        draftCol.remove();

        const submitButton = this.elementForm.querySelector("#submit");
        submitButton.textContent = "Atualizar Doação";

        injectFormDraft(this.donationElementField, this.#donation);
    }

    #getPageParams() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const institutionId = params.get("institutionId");
        return { id, institutionId };
    }

    #getDonation() {
        const donation = $g_getDonationById(this.#pageParams.id);
        return donation ? donation : null;
    }

    #getFormElement() {
        return document.querySelector("#donation-form");
    }

    #getDonationElementField() {
        return document
            .querySelectorAll("#donation-form .donation_fields")[0]
            .cloneNode(true);
    }

    #addHiddenMetadataInputs() {
        if (!this.elementForm || !this.#donation) return;

        this.elementForm.appendChild(
            this.#createHiddenMetadataElements(
                this.#donation.id,
                this.#donation.status,
                this.#donation.donator
            )
        );
    }

    #createHiddenMetadataElements(id, status, donator) {
        const elements = document.createElement("div");

        elements.innerHTML = `
            <input type="hidden" class="form_item" id="id" value="${id}" />
            <input type="hidden" class="form_item" id="status" value="${status}" />
            <input type="hidden" class="form_item" id="donator" value="${donator}" />
            <input type="hidden" class="form_item" id="edited" value="1" />
        `;

        return elements;
    }
}
