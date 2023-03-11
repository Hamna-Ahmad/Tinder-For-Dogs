// Create the Dog class here

export class Dog{
    constructor(data){
        Object.assign(this, data)

    }

    getDogProfileHtml() {
        const {name, avatar, age, bio} = this;

        return `
        // TinDog Profiles 
        <div class="profile-img-div">
            <img class="profile-img" src="${avatar}" alt="Dog profile photo">
        </div>
        <h3 class="info">${name}, ${age} </h3>
        <p class="bio">${bio}</p>

        // Nope/Like Banners
        <img class="nope-img" src="images/nope-img.png" salt="Nope image">
        <img class="like-img" src="images/like-img.png" alt="Like image">
        `
    }
    
}