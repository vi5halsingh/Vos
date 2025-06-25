import { appWindow } from '../components/appWindow.js'
document.addEventListener("DOMContentLoaded", (e)=>{

const mail = (window.appItems).find(item =>{
   item.cls === 'mail'
})

// const windowel = document.querySelectorAll('.mail')

// windowel.forEach(element => {
    mail.addEventListener('click',(e) =>{
  
        const content = `<iframe src="https://mail.google.com/mail" style="width:100%; height:100%; border:0;"></iframe>`
       
    appWindow({title:"Google" , content , id:"appwindow" , bg:"linear-gradient(90deg,#4485f3 0%, #e9b211 50%, #e94335 100%)" })
    })
    
// });


})