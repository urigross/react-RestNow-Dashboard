export const localStorageService = {
    save: saveToStorage,
    load: loadFromStorage,
    delete: deleteFromStorage,
    isUserExists: isUserExistsAtStorage
}
async function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}
function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key) || "[]")
}
function deleteFromStorage (key){
    localStorage.removeItem(key);
}

function isUserExistsAtStorage(key){
    return localStorage.getItem(key);
}




