const {log} = console;

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
        let int = setInterval(scroll,10)
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
    else if(e.key =='R' && e.ctrlKey){
        alert('Click the element that you wish to be autoclicked!');
        (function handleClick(){
            let event = document.onclick;
            document.onclick = function(e){
                if(typeof event === 'function'){
                    event()
                }
                function click(){
                    e.target.click()
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
