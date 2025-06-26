import { appWindow } from '../components/appWindow.js'

document.addEventListener("DOMContentLoaded", () => {
    // Find the chatgpt app item (if you need it for something)
    const chatgpt = (window.appItems || []).find(item => item.cls === 'chatgpt')

    // Select all elements with the class 'chatgpt'
    const windowel = document.querySelectorAll('.chatgpt')

    windowel.forEach(element => {
        element.addEventListener('click', (e) => {
            // const content = `<div style="width: 100%; height: 100%; "> <iframe  src="https://chatgpt.com/" width="100%" height="100%"  style="border: none;"  loading="lazy" sandbox="allow-forms allow-scripts allow-same-origin"></iframe></div>`
            // appWindow({title:"ChatGPT" , content , id:"chatgpt-appwindow" , bg:"#212121" })
            window.open("https://chatgpt.com/")
        })
    })
    // chatgpt:  <iframe  src="https://chatgpt.com/" width="100%" height="100%"  style="border: none;"  loading="lazy" sandbox="allow-forms allow-scripts allow-same-origin"></iframe>,
})