const startH1 = document.getElementById('startingPoint')
const startSection = document.getElementById('startSection')
const desktop = document.getElementById('desktop')
const bootH1 = document.getElementById('bootPoint')
const menubtn = document.getElementById('menu')
const menubar = document.getElementById('menubar')
// const loginScreen = document.getElementById('loginScreen')
// const loginForm = document.getElementById('loginForm')


startSection.addEventListener('click',async (e)=>{
    e.preventDefault();
    startH1.style.display = 'none'
    bootH1.style.display = 'block'
setTimeout(() => {
    startSection.style.display = 'none'
    loginScreen.style.display = "flex"
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
document.getElementById('down').addEventListener('click',(e) =>{
    if(menubar.style.display === 'none' || menubar.style.display === ''){
        menubar.style.display = 'block'
    } else {
        menubar.style.display = 'none'
    }
  
    
})



const contextMenu =  document.getElementById('contextMenu')
desktop.addEventListener('contextmenu' ,(e) =>{
    e.preventDefault()
    if(contextMenu.style.display === "block"){
        contextMenu.style.display =  "none"
    }
    else{
        contextMenu.style.display = "block"
    }
})
const view = document.querySelector('.view')
view.addEventListener('click', (e) =>{
    // alert("hide app")
    if(document.getElementById('desktopApp').style.display ==='none'){
        document.getElementById('desktopApp').style.display  = "flex"
         view.style.backgroundColor = 'transparent'
    } 
    else{
        document.getElementById('desktopApp').style.display = "none"
        view.style.backgroundColor = 'gray'
    }
})
desktop.onclick = () =>{
  contextMenu.style.display = "none"
}



const toggleBg = (element) => {
    // If current background is gray, set to white; if white, set to gray; otherwise, set to gray
    if (element.style.backgroundColor === "white") {
        element.style.backgroundColor = "gray";
    } else {
        element.style.backgroundColor = "white";
    }
};

const box1 = document.querySelectorAll('.box1');
box1.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        toggleBg(element);
    });
});

const box2 = document.querySelectorAll('.box2');
box2.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        toggleBg(element);
    });
});
