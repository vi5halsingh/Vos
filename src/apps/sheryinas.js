import { appWindow } from '../components/appWindow.js'

const windowel = document.querySelectorAll('.sheryianscodingschool')

windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
        const content = `
        <iframe class="fullSpace" frameborder=5 src="https://www.sheryians.com"  style="height:100%; border:2px solid red; width:100%"></iframe>
        `
    appWindow({title:"sheryians" , content , id:"appwindow" })
    })   
});