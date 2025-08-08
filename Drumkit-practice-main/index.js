var numOfButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //        var audio = new Audio("./sounds/crash.mp3");
    // audio.play();

    // console.log(this)
    // console.log(this.innerHTML)
    var song = this.innerHTML;
     makesong(song);
  })
}
  document.addEventListener("keydown", function(event){
    console.log(event.key);
    makesong(event.key);
})

function makesong(key){
    switch (key) {
      case "w":
        var audio = new Audio("./sounds/dheere song.mp3");
        audio.play();
        audio.currentTime = 1;
        //  audio.pause();
        break;
      case "a":
        var audio1 = new Audio("./sounds/tom-4.mp3");
        audio1.play();

        break;
      case "s":
        var audio2 = new Audio("./sounds/crash.mp3");
        audio2.play();
        break;
      case "d":
        var audio3 = new Audio("./sounds/snare.mp3");
        audio3.play();
        break;
      case "j":
        var audio4 = new Audio("./sounds/tom-1.mp3");
        audio4.play();
        break;
      case "k":
        var audio5 = new Audio("./sounds/tom-2.mp3");
        audio5.play();
        break;
      case "l":
        var audio6 = new Audio("./sounds/tom-3.mp3");
        audio6.play();
        break;
      default:
        console.log(`Not found`)
        break;
    }
  }


