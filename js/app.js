// * * * * * * * * * * * * * * * * * * * * * * * *
// 1) Set-up 
// * * * * * * * * * * * * * * * * * * * * * * * *
let openButton = document.querySelector("#open-button"); 
let mobileMenu = document.querySelector("#mobile-menu"); 

// * * * * * * * * * * * * * * * * * * * * * * * *
// 2) Write Functions 
// * * * * * * * * * * * * * * * * * * * * * * * *
function open() { 
    console.log("Open Pressed!"); 
}

// * * * * * * * * * * * * * * * * * * * * * * * *
// 3) Wire it All Together
// * * * * * * * * * * * * * * * * * * * * * * * *
openButton.addEventListener('click', open); 