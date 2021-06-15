const {log} = console;

if(document.querySelector('video')){
    if(document.querySelector('video').autoplay){
        document.querySelector('video').pause()
        document.querySelector('video').addEventListener('click',myFunc)
        
function myFunc(){
document.querySelector('video').removeEventListener('click',myFunc)
document.querySelector('video').play()
  }
 }
}

if(document.querySelector('iframe')){
    if(document.querySelector('iframe').src == "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&enablejsapi=1&autoplay=1&mute=1"){
document.querySelector('iframe').remove()
}
}

if(location.href.toLowerCase().includes('astley')){
   document.body.innerHTML = `
        <h1>NoNoNo!!!</h1>
  <p>This page was bad and tried to rickroll you :(</p>
    `
}

setInterval(() => {
    
if(location.href === 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' || location.href === 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be'){
    location.href = "about:blank"
}
},100)

if(location.href.toLowerCase().indexOf('noordstar') > -1){
     location.href = "about:blank"
}

document.addEventListener('keyup',handleKeyUp)

function handleKeyUp(e){
if(e.key=='P' && document.querySelector('video') && e.ctrlKey){
     if(!e.altKey){
    if(!document.pictureInPictureElement){
    for(let i = 0; i < document.querySelectorAll('video').length; i++){
    if(!document.pictureInPictureElement){
     document.querySelectorAll('video')[i].requestPictureInPicture()
    }
    else{
     null
    }
}
        setTimeout(console.clear,3000)
    }
    else{
     document.exitPictureInPicture();
    }
}   
else{
    if(!document.pictureInPictureElement){
 let answer = +(prompt('What video do you want to be played in Picture-In-Picture?'))
 
 document.querySelectorAll('video')[answer].requestPictureInPicture()
    }
    else{
     document.exitPictureInPicture()
    }
}
}
    else if(e.key =='S' && e.ctrlKey){
        function scroll(){
            scrollBy(0,10)
        }
        let int = setInterval(scroll,100)
        document.removeEventListener('keyup',handleKeyUp)
        document.addEventListener('keyup',handleKeyUp2)
        function handleKeyUp2(e){
            if(e.key === 's'){
                clearInterval(int)
                document.addEventListener('keyup',handleKeyUp)
                document.removeEventListener('keyup',handleKeyUp2)
            }
        }
    }
}
