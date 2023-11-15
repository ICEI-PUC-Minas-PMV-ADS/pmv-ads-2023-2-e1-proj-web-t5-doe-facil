'use strict'

export const _createNewId = (typeId) => {
    let lastId = parseInt(localStorage.getItem(`last_${typeId}_id`))

    if (!lastId) lastId = 1
    else lastId += 1

    localStorage.setItem(`last_${typeId}_id`, lastId)
    return lastId
}
