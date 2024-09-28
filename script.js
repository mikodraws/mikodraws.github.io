function allload() {
    document.getElementsByClassName("loading")[0].style.animation = " mover 2s cubic-bezier(0, 0, 0, 0.97) forwards"
    document.getElementsByClassName("background-overlay")[0].style.animation = "mover2 2s cubic-bezier(0, 0, 0, 0.97) forwards"
}




window.addEventListener("load", (event) => {
    setTimeout(() => {
        document.getElementsByClassName("loading")[0].style.animation = " mover 1.2s cubic-bezier(0.85, 0.54, 0.6, 1.02) forwards"
         document.getElementsByClassName("background-overlay")[0].style.animation = "mover2 1.2s cubic-bezier(0.85, 0.54, 0.6, 1.02) forwards"
       },1000)
  });


  function goto(url) {
    document.getElementsByClassName("loading")[0].style.animation = " moverA 1.2s cubic-bezier(0.85, 0.54, 0.6, 1.02) forwards"
         document.getElementsByClassName("background-overlay")[0].style.animation = "moverA 1.2s cubic-bezier(0.85, 0.54, 0.6, 1.02) forwards" 
         if (url) {
            setTimeout(() => {
                location.href = url;
               },2200)
         }
         
    
  }
  
