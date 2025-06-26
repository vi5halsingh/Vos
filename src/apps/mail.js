import { appWindow } from '../components/appWindow.js'
document.addEventListener("DOMContentLoaded", (e)=>{

const mail = (window.appItems).find(item =>{
   item.cls === 'mail'
})
console.log(mail)
// const windowel = document.querySelectorAll('.mail')

// windowel.forEach(element => {
    mail.addEventListener('click',(e) =>{
  window.location('https://mail.google.com/')
    })
    
// });


})