import { appWindow } from '../components/appWindow.js'

const windowel = document.querySelectorAll('.terminal')

windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
        const content = `
        <iframe class="fullSpace" frameborder=0 src="https://www.terminaltemple.com/" style="height:100%; width:100%"></iframe>
        `
    appWindow({title:"terminal" , content , id:"appwindow" })
    })
    
});