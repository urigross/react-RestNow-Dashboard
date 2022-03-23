import { localStorageService } from "./localStorageService";
import { utilService } from "./util.service";

const KEY = 'restNowUser';
const users = [{id:utilService.makeId(),fullname:'Uri'},{id:utilService.makeId(),fullname:'Keren'},{id:utilService.makeId(),fullname:'Moti'}];

export const userService = {
    load:loadUserFromLS,
    init:initUser,
    update: saveUser,
    delete:deleteUser,
    getUsers: getMockUsers
}

function getMockUsers(){
    return users;
}

function initUser(){
    if (localStorageService.isUserExists(KEY)) return;
    let user = {id:utilService.makeId(), fullname:'New User'};
    console.log('inituser() userrrrrrrrrr',user);
    saveUser(user);
}
function saveUser(user){
    console.log('saveUser() userrrrrrrrrr',user);
    localStorageService.save(KEY,user);
}
function loadUserFromLS(){
    return localStorageService.load(KEY);
}
function deleteUser(){
    localStorageService.delete(KEY)
}

