import { appWindow } from '../components/appWindow.js'
document.addEventListener("DOMContentLoaded", e =>{
    
const windowel = document.querySelectorAll('.sheryianscodingschool')
const sheryianscodingschool = (window.appItems).find(item =>{
    item.cls === 'sheryianscodingschool'
 })
 
windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
        const content = `
        <iframe class="fullSpace" frameborder=5 src="https://www.sheryians.com"  style="height:100%; width:100%"></iframe>
        `
    appWindow({title:"sheryians" , content , id:"appwindow" , bg:"#0f2822"})
    })   
});


})