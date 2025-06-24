

let itemcontainer = document.querySelector('.Items')

const apps = [
    {
        img:"./public/icons/mail.svg",
        name:"Email"
    },
    {
        img:"./public/icons/vishal.png",
        name:"Portfolio"
    },
    {
        img:"./public/icons/seriyans.png",
        name:"Sheryians Coding School"
    },
    {
        img:"./public/icons/terminal-line.svg",
        name:"Terminal"
    },
    {
        img:"./public/icons/Group 493.png",
        name:"Music"
    },
    {
        img:"https://media.tenor.com/SQOgkzxlYxEAAAAi/visual-studio-code.gif",
        name:"VS Code"
    },
  
    
    
]
apps.forEach((app) => {
    const appItem = document.createElement('span');
    appItem.className = 'appitem';

    const img = document.createElement('img');
    img.src = app.img;
    img.alt = '';

    const label = document.createElement('p');
    label.style.display = 'none';
    label.textContent = (app.name).slice(0 , 15) + "...";

    appItem.appendChild(img);
    appItem.appendChild(label);

    itemcontainer.appendChild(appItem);
});


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