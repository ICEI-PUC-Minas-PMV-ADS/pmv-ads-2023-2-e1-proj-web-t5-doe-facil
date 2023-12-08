"use strict";

import { _testimonySeed } from "./data.js";
import { _createNewId } from "./database.js";
import { $g_getUserById } from "./user.js";

export function $g_getLastTestimonials(num = 3) {
    const testimonials = $g_getAllTestimony();
    let lastTestimonials = [];

    let total = num;
    if (total > testimonials.length) {
        total = testimonials.length;
    }

    for (let i = 1; i <= total; i++) {
        lastTestimonials.push(testimonials[testimonials.length - i]);
    }

    lastTestimonials = lastTestimonials.map((t) => {
        const author = $g_getUserById(t.author);
        return { ...t, author_name: author.name, author_type: author.type };
    });

    return lastTestimonials;
}

export const $g_getAllTestimony = () => {
    let testimonials = JSON.parse(localStorage.getItem("testimonials"));
    if (!testimonials) testimonials = [];
    return testimonials;
};

export const $g_createTestimony = (text, authorId) => {
    let testimonials = $g_getAllTestimony();

    testimonials.push({
        id: _createNewId("testimony"),
        text,
        author: authorId,
    });

    localStorage.setItem("testimonials", JSON.stringify(testimonials));
};

export const $g_getUserTestimony = (id) => {
    let testimonials = $g_getAllTestimony();
    testimonials = testimonials.filter((t) => t.author === id);
    return testimonials;
};

export const $g_deleteTestimony = (id) => {
    let testimonials = $g_getAllTestimony();
    testimonials = testimonials.filter((t) => t.id !== id);
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
};

export const $g_createTestimonails = () => {
    let testimonials = JSON.parse(localStorage.getItem("testimonials"));

    if (!testimonials) {
        testimonials = [..._testimonySeed()];
    }

    localStorage.setItem("testimonials", JSON.stringify(testimonials));
};
