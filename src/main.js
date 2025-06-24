const startH1 = document.getElementById('startingPoint')
const startSection = document.getElementById('startSection')
const desktop = document.getElementById('desktop')
const bootH1 = document.getElementById('bootPoint')
const menubtn = document.getElementById('menu')
const menubar = document.getElementById('menubar')


document.addEventListener('click',async (e)=>{
    e.preventDefault();
    startH1.style.display = 'none'
    bootH1.style.display = 'block'
setTimeout(() => {
    startSection.style.display = 'none'
    desktop.style.display = 'block'
}, 3000);

})

menubtn.addEventListener('click',(e) =>{
    if(menubar.style.display === 'none' || menubar.style.display === ''){
        menubar.style.display = 'block'
    } else {
        menubar.style.display = 'none'
    }
  
    
})

desktop.addEventListener('contextmenu' ,(e) =>{
    e.preventDefault()
    alert("context")
})

// //   Hide menubar when clicking outside of it, but not when clicking the menu button
//   document.addEventListener('click', (e) => {
//     const menubar = document.getElementById('menubar')
//         menubar.style.display = 'none';
    
//   });
