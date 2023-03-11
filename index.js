// Remember to import the data and Dog class!

import {dogs} from './data.js'
import {Dog} from './Dog.js'

let profilesArray = ["Bella", "Teddy"]

function getNewProfile() {
    const nextProfileData = dogs.filter(function(profile){
        return profile.name === profilesArray[0]

    })[0]
    profilesArray.shift()
    return nextProfileData ? new Dog(nextProfileData) : {}
}

function swiped(){
    if (rex.hasBeenSwiped){
        if (profilesArray.length > 0){
            setTimeout(function(){
                profile = getNewProfile()
                render()
            },1000)
        }
    }

}

function render(){
    if(rex.hasBeenSwiped === false){
        document.getElementById('profiles').innerHTML = rex.getDogProfileHtml();
    
    } else {
        document.getElementById('profiles').innerHTML = profile.getDogProfileHtml();
    }
}


// Buttons
document.querySelector('.nope-btn').addEventListener('click', rejected)
document.querySelector('.like-btn').addEventListener('click', liked)

function rejected(){
    if (rex.hasBeenLiked === false){
        rex.hasBeenSwiped = true;
    } else if (profile.hasBeenLiked === false) {
        profile.hasBeenSwiped = true;
    }
    document.querySelector('.nope-img').style.display = 'block';
    swiped()
}    

function liked(){
    if(rex.hasBeenLiked === false){
        rex.hasBeenLiked = true;
        rex.hasBeenSwiped = true;
    } else if (profile.hasBeenLiked === false) {
        profile.hasBeenLiked = true;
        profile.hasBeenSwiped = true;
    }
    document.querySelector('.like-img').style.display = 'block';
    swiped()

} 

let profile = {}
const rex = new Dog(dogs[0])
render()
