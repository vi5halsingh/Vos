let itemcontainer = document.querySelector('.Items')



const gotoappbtn = document.getElementById('go-to-apps')
const appstore = document.getElementById('AppStore')
gotoappbtn.addEventListener("click" , (e) =>{
    
   appstore.style.display = appstore.style.display === "grid" ? "none" : "grid"
})

// document.querySelectorAll('.appitem').forEach((item) => {
    // console.log(item)
    itemcontainer.addEventListener("mouseover",(e)=>{
        const item = e.target.closest('.appitem')
        if(item){
            const lable =   item.querySelector('p')
            if(lable){
                lable.style.display = 'inline-block'
            }
        }
})

document.querySelector('.Items').addEventListener('mouseout', (e) => {
    const item = e.target.closest('.appitem');
    if (item) {
      const label = item.querySelector('p');
      if (label) label.style.display = 'none';
    }
  });

 const appItems = [
  { icon: './public/icons/mail.svg', name: 'Mail', cls:"mail" },
  { icon: './public/icons/vishal.png', name: 'Portfolio',cls:"portfolio" },
  { icon: './public/icons/seriyans.png', name: 'sheryians coding school',   cls:"sheryianscodingschool"},
  { icon: './public/icons/google.svg', name: 'Google',  cls:"google"},
  { icon: './public/icons/terminal-line.svg', name: 'Terminal',  cls:"terminal" },
  { icon: './public/icons/Group 493.png', name: 'Music', cls:"music" },
  { icon: 'https://media.tenor.com/SQOgkzxlYxEAAAAi/visual-studio-code.gif', name: 'VSCode' , cls:"vscode" },
  // Add more items as needed
];


const itemsContainer = document.querySelector('#AppStore .Items');
itemsContainer.innerHTML = appItems.map(item => `
  <div class="${item.cls} appitem">
    <img src="${item.icon}" alt="${item.name}" />
    <p style="display:none">${item.name} </p>
  </div>
`).join('');


const windowel = document.querySelectorAll('.portfolio')
import { appWindow } from '../components/appWindow.js'
windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
        const content = `
        <iframe class="fullSpace" frameborder=0 src="https://vi5hal.vercel.app/" style="height:100%; width:100%"></iframe>
        `
    appWindow({title:"Vishal" , content , id:"appwindow" , bg:"#1a1a1a" })
    })
    
});

const mail = document.querySelectorAll('.mail')
mail.forEach(element => {
  element.addEventListener('click',(e) =>{
    // e.preventDefault()
    // alert("changing")
   window.open('https://mail.google.com/')
})

});
const music = document.querySelectorAll('.music')
music.forEach(element => {
  element.addEventListener('click',(e) =>{
    // e.preventDefault()
    // alert("changing")
   window.open('https://open.spotify.com/')
})
})
window.appItems = appItems