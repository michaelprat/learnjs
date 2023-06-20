//alert("its linked");

//var wbutton=document.querySelector(".w");
//wbutton.addEventListener("click",handleclick);
//var drumaudio=new Audio("./sounds/crash.mp3");

//document.addEventListener("keypress",function(event)
//{  console.log(event);
  //  alert("Keyboard button pressed!");
//})

document.addEventListener("keypress",function(event)
{
playsoundkeyboard(event.key);
});

var allbutton=document.querySelectorAll(".drum"); //select all button which has drum class in html
for(var i=0;i<allbutton.length;i++)
{
    allbutton[i].addEventListener("click",playsound); //add event to each button 
}
function buttonAnimation(key)
{
    var activebutton=document.querySelector("."+key+"");
    console.log(activebutton);
    activebutton.classList.add("pressed"); //add pressed animation class 
    setTimeout(function()
    {
      activebutton.classList.remove("pressed"); //remove pressed animation class after 3seconds
    },3000);//3000 miliseconds is equals to 3 seconds
}

function handleclick()
{
    alert("Button touched");
}
function playsoundkeyboard(key)
{
    switch(key)
    {
      case "w":
        
      buttonAnimation(key);
      var tom1=new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
      case "a":
        buttonAnimation(key);
      
      var tom2=new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
      case "s":
        buttonAnimation(key);
      
      var tom3=new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
      case "d":
        buttonAnimation(key);
      
      var tom4=new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
      case "j":
        buttonAnimation(key);
      
      var crash=new Audio("./sounds/crash.mp3");
      crash.play();
      break;
      case "k":
        buttonAnimation(key);
      
      var kick=new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
      case "l":
        buttonAnimation(key);
          var snare=new Audio("./sounds/snare.mp3");
          snare.play();
          break;
       default:
          break;
  
    }
}


function playsound()
{
     //to know which button is pressed
 
  switch(this.innerHTML)
  {
    case "w":
    buttonAnimation(this.innerHTML);
    var tom1=new Audio("./sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
        buttonAnimation(this.innerHTML);    
    var tom2=new Audio("./sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
        buttonAnimation(this.innerHTML);     
    var tom3=new Audio("./sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
        buttonAnimation(this.innerHTML);    
    var tom4=new Audio("./sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
        buttonAnimation(this.innerHTML);    
    var crash=new Audio("./sounds/crash.mp3");
    crash.play();
    break;
    case "k":
        buttonAnimation(this.innerHTML);   
    var kick=new Audio("./sounds/kick-bass.mp3");
    kick.play();
    break;
    case "l":
        buttonAnimation(this.innerHTML);   
        var snare=new Audio("./sounds/snare.mp3");
        snare.play();
        break;
    default:
        break;

  }
  //this.style.color="white";
}