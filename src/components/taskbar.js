const taskbar = document.getElementById('taskbarBody')

const cursor = document.addEventListener("mousemove",( e) =>{
    e.preventDefault();
    const X = e.clientX
    const Y = e.clientY
    const windowheight = window.innerHeight;
    const windowwidth = window.innerWidth;
  
    const percentX = (X/windowwidth) * 100; 
    const percentY = (Y/windowheight) * 100; 
    if(percentY >= 92){
        taskbar.style.display = 'flex'
    }else{
         taskbar.style.display = 'none'
    }
})
// taskbar.addEventListener("mouseout",( e) =>{ 
//     taskbar.style.display = 'none'
// })

