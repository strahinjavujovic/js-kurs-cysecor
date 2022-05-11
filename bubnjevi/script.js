let crashRide= document.querySelector('.crash');
let hiHat=document.querySelector('.hihat');

const animacijaCrash = (stepen) =>{
    crashRide.style.transform='rotate('+stepen+'deg)';
}
const animacijaCrashEnd =()=>{
    crashRide.style.transform='rotate(-7.2deg)';
}

const animacijaHihat=()=>{
    hiHat.style.top='203px';
}
const animacijaHihatEnd =()=>{
    hiHat.style.top='200px';
}

window.addEventListener('keydown',event=>{
    let audio = new Audio();

    let playlist= new Array('sounds/crash.wav','sounds/ride.wav'
    ,'sounds/tom-low.wav','sounds/tom-mid.wav','sounds/tom-high.wav',
    'sounds/kick.wav','sounds/snare.wav','sounds/hihat-close.wav',
    'sounds/hihat-open.wav'
    );

    switch(event.key){
        case 'e':audio.src=playlist[0]; audio.play();animacijaCrash(0);break;
        case 'r':audio.src=playlist[1]; audio.play();animacijaCrash(-14.4);break;
        case 'f':audio.src=playlist[2]; audio.play();break;
        case 'g':audio.src=playlist[3]; audio.play();break;
        case 'h':audio.src=playlist[4]; audio.play();break;
        case 'v':audio.src=playlist[5]; audio.play();break;
        case 'b':audio.src=playlist[5]; audio.play();break;
        case 'j':audio.src=playlist[6]; audio.play();break;
        case 'i':audio.src=playlist[8]; audio.play();animacijaHihat();break;
        case 'k':audio.src=playlist[7]; audio.play();animacijaHihat();break;
        default:break;
    }
});
crashRide.addEventListener('transitionend',animacijaCrashEnd);
hiHat.addEventListener('transitionend',animacijaHihatEnd);

