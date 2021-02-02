window.addEventListener("load",function(){
const rando=Math.floor(Math.random() * 5) + 1;

//console.log(rando)

/*if(rando !== 5){
   alert('Better luck next time :(');
    
    window.location.reload(true)
}
else if (rando === 5){
    alert('Lucky Boi! :)')
}
else{
    alert('Error')
    for(let i=0; i<100; i++){
        console.error('Error!!! :(')
    }
}*/


    /*let sssssshhhhhhwhhhhhyyyyyyyyymyyyyggguuuuyyyyydude='0123456789ABCDEF';
    document.querySelectorAll('*').forEach(t => t.style.outline=`1px solid #${sssssshhhhhhwhhhhhyyyyyyyyymyyyyggguuuuyyyyydude[Math.floor(Math.random() * 15)]}${sssssshhhhhhwhhhhhyyyyyyyyymyyyyggguuuuyyyyydude[Math.floor(Math.random() * 15)]}${sssssshhhhhhwhhhhhyyyyyyyyymyyyyggguuuuyyyyydude[Math.floor(Math.random() * 15)]}${sssssshhhhhhwhhhhhyyyyyyyyymyyyyggguuuuyyyyydude[Math.floor(Math.random() * 15)]}${sssssshhhhhhwhhhhhyyyyyyyyymyyyyggguuuuyyyyydude[Math.floor(Math.random() * 15)]}${sssssshhhhhhwhhhhhyyyyyyyyymyyyyggguuuuyyyyydude[Math.floor(Math.random() * 15)]}`)
*/                                          

    
//if(document.querySelector('button.VfPpkd-LgbsSe')){ document.querySelector('button.VfPpkd-LgbsSe').click()}    
    let var1=true;
    let var2=true;
    
    document.addEventListener('keydown',function(e){
        //console.log(e.code,e.which,e.key)
if(e.key=='P' && document.querySelector('video') && e.ctrlKey){
               //alert(asking)
     if(var1===true){
document.querySelector('video').requestPictureInPicture()
     var1=false;
    }
    else if(var1===false){
        var1=true;
        document.exitPictureInPicture();
    }
  }
        
        else if(e.key=='F' && e.ctrlKey){
            //alert(asking)
        if(var2===true){
         if(document.querySelector('video')){
document.querySelector('video').requestFullscreen();
        }
         else if(document.querySelector('iframe')){ document.querySelector('iframe').requestFullscreen();
        }
         else if(document.querySelector('canvas')){ document.querySelector('canvas').requestFullscreen();
        }
          var2=false;
    }
      else if(var2===false){
      var2=true;
          document.exitFullscreen();
      }
    }
    })
})