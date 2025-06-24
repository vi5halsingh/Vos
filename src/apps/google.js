import { appWindow } from '../components/appWindow.js'


const windowel = document.querySelectorAll('.google')

windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
   
        const content = `<iframe src="https://www.google.com/search?igu=1" style="width:100%; height:100%; border:0;"></iframe>`
//         const content = `<iframe 
//   src="https://www.youtube.com/embed?listType=user_uploads&list=GoogleDevelopers" 
//   width="100%" 
//   height="600" 
//   frameborder="0" 
//   allowfullscreen>
// </iframe>`
       
       
    appWindow({title:"Google" , content , id:"appwindow" })
    })
    
});

// document.getElementById('terminal').addEventListener('click',(e) =>{
//     const content = `<h1>i am terminal </h1>`
// appWindow({title:"terminal" , content , id:"appwindow" })
// })