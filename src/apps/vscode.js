import {appWindow}  from '../components/appWindow.js'


const windowel = document.querySelectorAll('.vscode')
// console.log( windowel)
windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
        const content = `
         <div class="vscode-wrapper">
        <div class="sidebar">
            <div class="sidebar-header">EXPLORER</div>
            <ul class="file-tree">
                <li><span class="icon folder"></span> src/</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="icon file"></span> index.html</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="icon file"></span> style.css</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="icon file"></span> script.js</li>
                <li><span class="icon folder"></span> public/</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="icon file"></span> favicon.ico</li>
            </ul>
            </div>
        <div class="main-content">
            <div class="tabs-bar">
                <div class="tab active">index.html <span class="close-tab">&times;</span></div>
                <div class="tab">style.css <span class="close-tab">&times;</span></div>
            </div>
            <div class="editor-container" id="editor-parent">
                <div id="editor" style="height:100%; width:100%;"></div>
            </div>
            <div class="status-bar">
                <div class="status-left">
                    <span>&#x2614; Online</span>
                    <span>&#x270F; UTF-8</span>
                </div>
                <div class="status-right">
                    <span>Ln 1, Col 1</span>
                    <span>Spaces: 4</span>
                    <span>JavaScript</span>
                </div>
            </div>
        </div>
    </div>`
    appWindow({title:"Vs code" , content , id:"appwindow" })
    })
    
});

// require(['vs/editor/editor.main'], () => {
//   monaco.editor.create(document.getElementById('editor'), {
//     value: "// type your code here",
//     language: "javascript"
//   });
// });
// document.getElementById('vscode').addEventListener('click',(e) =>{
//     const content = `<h1>i am visula studio code </h1>`
// appWindow({title:"vs code" , content , id:"appwindow" })
// })