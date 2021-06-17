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
    else if(e.key.toLowerCase().match(/^arrow/) !== null && e.ctrlKey && e.shiftKey){
        let direction = e.key.toLowerCase().replace('arrow','');
        function scroll(){
          if(direction === 'down'){
           scrollBy(0,10)
          }
          else if(direction === 'up'){
           scrollBy(0,-10)
          } 
          else if(direction === 'right'){
           scrollBy(10,0)
          }
          else {
           scrollBy(-10,0)
          }
        }
        let int = setInterval(scroll,10)
        document.removeEventListener('keyup',handleKeyUp)
        document.addEventListener('keyup',handleKeyUp2)
        function handleKeyUp2(e){
            if(e.key.toLowerCase() === 's'){
                clearInterval(int)
                document.addEventListener('keyup',handleKeyUp)
                document.removeEventListener('keyup',handleKeyUp2)
            }
        }
    }
    else if(e.key =='R' && e.ctrlKey){
        alert('Click the element that you wish to be autoclicked!');
        (function handleClick(){
            let event = document.onclick;
            document.onclick = function(e){
                if(typeof event === 'function'){
                    event()
                }
                let truth = !0
                function click(){
                    if('click' in e.target){
                     e.target.click()
                    }
                    else{
                      if(e.target.parentElement !== null && 'click' in e.target.parentElement){
                        e.target.parentElement.click()
                        return;
                      }
                      if(truth){
                        alert('Could not click element due to technical issues.')
                        truth = !1
                        return;
                      }
                    }
                }
                let delay = prompt('How much delay in milliseconds do you want between clicks?')
                let int = setInterval(click,Number.isNaN(+delay) ? 1000 : +delay)
                document.removeEventListener('keyup',handleKeyUp)
                document.addEventListener('keyup',handleKeyUp2)
                function handleKeyUp2(e){
                if(e.key === 'r'){
                    clearInterval(int)
                    document.addEventListener('keyup',handleKeyUp)
                    document.removeEventListener('keyup',handleKeyUp2)
                 }
                }
                document.onclick = event
            }
        })()
    }
}
