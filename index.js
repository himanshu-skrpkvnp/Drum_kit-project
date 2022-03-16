// adding Event listener to all the buttons
for( var i = 0 ; i <= document.querySelectorAll(".drum").length ; i++ ) {
// {   here eventlister has two parameters "click" and anonymous function handleClick
    document.querySelectorAll("button")[i].addEventListener("click" , function handleClick()
    {
      var buttonInnerHTML = this.innerHTML ;
      makeSound(buttonInnerHTML) ;
      buttonAnimation(buttonInnerHTML);

    });
}
// Detecting keyboard press
document.addEventListener('keydown',function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
//  detecting which key is pressed and producing subsequent tune
function makeSound(key)
{
    switch (key) {
        case "w":
              var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play() ;
              break;
        case "a":
              var tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play() ;
              break;
       case "s":
              var tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play() ;
              break;
       case "d":
              var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play() ;
              break;
       case "j":
              var snare = new Audio("sounds/snare.mp3");
              snare.play() ;
              break;
       case "k":
              var kickbass = new Audio("sounds/kick-bass.mp3");
              kickbass.play() ;
              break;
       case "l":
              var crash = new Audio("sounds/crash.mp3");
              crash.play() ;
              break;
    
        default: console.log(buttonInnerHTML)
            break;
           }}
// adding animation
function buttonAnimation(currentkey)
{
   var activeButton = document.querySelector("."+currentkey);
   activeButton.classList.add('pressed');

   setTimeout( function()
   {
       activeButton.classList.remove('pressed') ;
   } , 200 )
}