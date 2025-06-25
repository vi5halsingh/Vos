import { appWindow } from '../components/appWindow.js'
document.addEventListener('DOMContentLoaded', e =>{


const windowel = document.querySelectorAll('.terminal')
const terminal = (window.appItems).find(item =>{
    item.cls === 'terminal'
 })
 
windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
        const content = `
        <iframe class="fullSpace" frameborder=0 src="https://www.terminaltemple.com/" style="height:100%; width:100%"></iframe>
        `
    appWindow({title:"terminal" , content , id:"appwindow" })
    })
    
});

})