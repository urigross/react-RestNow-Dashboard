import { getRandomOptions } from "./bigheadsService";
import { localStorageService } from "./localStorageService";
import { utilService } from "./util.service";

const KEY = 'restNowUser';
const users = [
    {id:utilService.makeId(),fullname:'Uri', avatar: getRandomOptions()},
{id:utilService.makeId(),fullname:'Keren', avatar: getRandomOptions()},
{id:utilService.makeId(),fullname:'Moti', avatar: getRandomOptions()}];

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

async function initUser(){
    if (localStorageService.isUserExists(KEY)) return;
    let user = {id:utilService.makeId(), fullname:'New User'};
    user.avatar = getRandomOptions();
    saveUser(user);
}

function saveUser(user){
    localStorageService.save(KEY,user);
}
function loadUserFromLS(){
    return localStorageService.load(KEY);
}
function deleteUser(){
    localStorageService.delete(KEY)
}

