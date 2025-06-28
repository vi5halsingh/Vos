import {appWindow}  from '../components/appWindow.js'

document.addEventListener('DOMContentLoaded', e =>{
    
const windowel = document.querySelectorAll('.vscode')
// console.log( windowel)
windowel.forEach(element => {
       element.addEventListener('click',(e) =>{
        const content = `
         <div class="vscode-wrapper">
        <div class="sidebar">
            <div class="sidebar-header">EXPLORER</div>
            <button id="newFileBtn" style="margin: 10px 0; width: 90%;">+ New File</button>
            <ul class="file-tree" id="fileList"></ul>
            </div>
        <div class="main-content">
            <div class="tabs-bar" id="tabsBar"></div>
            <div class="editor-container" id="editor-parent">
                <textarea id="editor" style="height:60vh; width:100%; font-family:monospace; font-size:1rem; border:none; outline:none; resize:none;"></textarea>
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

    // --- File management logic ---
    let files = [
      { name: 'untitled1.js', content: '' }
    ];
    let currentFileIndex = 0;

    const fileList = document.getElementById('fileList');
    const editor = document.getElementById('editor');
    const newFileBtn = document.getElementById('newFileBtn');
    const tabsBar = document.getElementById('tabsBar');

    function renderFileList() {
      fileList.innerHTML = '';
      files.forEach((file, idx) => {
        const li = document.createElement('li');
        li.textContent = file.name;
        li.style.cursor = 'pointer';
        if (idx === currentFileIndex) li.style.fontWeight = 'bold';
        li.onclick = () => switchFile(idx);
        fileList.appendChild(li);
      });
    }

    function renderTabs() {
      tabsBar.innerHTML = '';
      files.forEach((file, idx) => {
        const tab = document.createElement('span');
        tab.textContent = file.name + ' '; 
        tab.style.padding = '0.3rem 0.7rem';
        tab.style.cursor = 'pointer';
        tab.style.background = idx === currentFileIndex ? '#eee' : 'transparent';
        tab.style.borderRadius = '5px 5px 0 0';
        tab.onclick = () => switchFile(idx);
        // Close button
        if (files.length > 1) {
          const closeBtn = document.createElement('span');
          closeBtn.textContent = '×';
          closeBtn.style.marginLeft = '5px';
          closeBtn.style.color = 'red';
          closeBtn.style.cursor = 'pointer';
          closeBtn.onclick = (ev) => {
            ev.stopPropagation();
            closeFile(idx);
          };
          tab.appendChild(closeBtn);
        }
        tabsBar.appendChild(tab);
      });
    }

    function switchFile(idx) {
      // Save current content
      files[currentFileIndex].content = editor.value;
      currentFileIndex = idx;
      editor.value = files[idx].content;
      renderFileList();
      renderTabs();
    }

    function closeFile(idx) {
      if (files.length === 1) return;
      files.splice(idx, 1);
      if (currentFileIndex >= files.length) currentFileIndex = files.length - 1;
      editor.value = files[currentFileIndex].content;
      renderFileList();
      renderTabs();
    }

    newFileBtn.onclick = () => {
      const newName = prompt('Enter file name:', `untitled${files.length+1}.js`);
      if (!newName) return;
      files.push({ name: newName, content: '' });
      switchFile(files.length - 1);
    };

    editor.oninput = () => {
      files[currentFileIndex].content = editor.value;
    };

    // Initial render
    editor.value = files[0].content;
    renderFileList();
    renderTabs();
    })
    
});


})
