import { $g_getAboutInfo } from "../public/js/about.js";

const pageInfo = $g_getAboutInfo()
const pageInfoDiv = document.querySelector("#page-info");

const descriptionText = document.createElement('p')
descriptionText.textContent = pageInfo.description
descriptionText.classList = 'p--text'


const subTitle = document.createElement('h2')
subTitle.textContent = pageInfo.sub_title

const roleText = document.createElement('p')
roleText.textContent = pageInfo.role
roleText.classList ='p--text'

pageInfoDiv.appendChild(descriptionText)
pageInfoDiv.appendChild(subTitle)
pageInfoDiv.appendChild(roleText)

const pageTitle = document.querySelector("#page-title")
pageTitle.textContent = pageInfo.title


