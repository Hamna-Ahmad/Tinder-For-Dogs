// Remember to import the data and Dog class!

import {dogs} from './data.js'
import {Dog} from './Dog.js'

let profilesArray = ["Bella", "Teddy"]
const nopeBtn = document.querySelector('.nope-btn')
const likeBtn = document.querySelector('.like-btn')

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
            nopeBtn.disabled = false;
            likeBtn.disabled = false;
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
nopeBtn.addEventListener('click', rejected)
likeBtn.addEventListener('click', liked)

function rejected(){
    if (rex.hasBeenLiked === false){
        rex.hasBeenSwiped = true;
    } else if (profile.hasBeenLiked === false) {
        profile.hasBeenSwiped = true;
    }
    document.querySelector('.nope-img').style.display = 'block';
    likeBtn.disabled = true;
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
    nopeBtn.disabled = true;
    swiped()

} 

let profile = {}
const rex = new Dog(dogs[0])
render()
