

export function appWindow ({title , content , id, bg}){

  
  const desktop = document.getElementById('desktop')
    const appWindow = document.createElement('section')
    appWindow.className = 'app-window'
    appWindow.id = "appwindow" || id || `app-${Date.now()}`;
    appWindow.innerHTML = `
     <div class="windowHeader" style="background-color:${bg}">
        <div class="left">${title}</div>
         <div class="right">
         <button class="minimize" style="background:rgb(150, 147, 4);;border-radius:30px;   border:none; color:white; font-size:1rem; cursor:pointer;">–</button>
        <button class="maximize" style="background:green; border-radius:30px;  border:none; color:white; font-size:.5rem; cursor:pointer; border-radius:30px;  display:none;">⬜</button>
         <button class="pip" style="background:gray;  border-radius:30px;  border:none; color:white; font-size:.5rem; cursor:pointer;">📺</button>
        <button class="close" style="background:red; border-radius:30px; border:none; color:white; font-size:1rem; cursor:pointer;">×</button>
        </div>
        </div>
     <div id="windowContent">${content}</div>
     <div class="resize-handle resize-handle-n"></div>
     <div class="resize-handle resize-handle-e"></div>
     <div class="resize-handle resize-handle-s"></div>
     <div class="resize-handle resize-handle-w"></div>
     <div class="resize-handle resize-handle-ne"></div>
     <div class="resize-handle resize-handle-nw"></div>
     <div class="resize-handle resize-handle-se"></div>
     <div class="resize-handle resize-handle-sw"></div>
    `;
   desktop.appendChild(appWindow)
    
   

   const header = appWindow.querySelector('.windowHeader');
  
   let offsetX = 0, offsetY = 0, isDragging = false;

   header.style.cursor = 'context-menu'; // Default cursor
   header.onmousedown = function(e) {
   //   if (isMaximized) return; // Only allow drag if not maximized
     isDragging = true;
     header.style.cursor = 'move';
     const rect = appWindow.getBoundingClientRect();
     offsetX = e.clientX - rect.left;
     offsetY = e.clientY - rect.top;
     document.body.style.userSelect = 'none';
   };

   document.onmousemove = function(e) {
     if (!isDragging) return;
    
     appWindow.style.position = 'absolute';
     appWindow.style.left = (e.clientX - offsetX) + 'px';
     appWindow.style.top = (e.clientY - offsetY) + 'px';
     appWindow.style.right = '';
     appWindow.style.bottom = '';
     pipBtn.style.display = 'none'
     maximizeBtn.style.display = 'block'
     isPIP = true

   };

   document.onmouseup = function() {
     isDragging = false;
     header.style.cursor = 'context-menu';
     document.body.style.userSelect = '';
   };

   const contentEl = appWindow.querySelector("#windowContent");
   const maximizeBtn = appWindow.querySelector(".maximize");
   const pipBtn = appWindow.querySelector(".pip");
   let isMinimized = false;
   let isMaximized = true;
   let isPIP = false;
   let prevMax = {};
   let prevPIP = {};
  



   appWindow.querySelector(".minimize").onclick = () => {
     contentEl.style.display = isMinimized ? "block" : "none";
     appWindow.style.top = 0
     appWindow.style.left = 0
    //  contentEl.style.height = 0 ? "100vh" : 0 
     isMinimized = !isMinimized;
   };
 

   maximizeBtn.onclick = () => {
   
     if (isPIP) {
       appWindow.style.left = "0";
       appWindow.style.top = "0";
       appWindow.style.width = "100vw";
       appWindow.style.height = "91.2vh";
       pipBtn.style.display = "inline-block";
       maximizeBtn.style.display = "none";
       isMaximized = true;
       isPIP = false;
     } 
   };
 

   
   pipBtn.onclick = () => {
     if (isMaximized) {

       prevMax = {
         left: appWindow.style.left,
         top: appWindow.style.top,
         right: appWindow.style.right,
         bottom: appWindow.style.bottom,
         width: appWindow.style.width,
         height: appWindow.style.height,
         position: appWindow.style.position
       };
       appWindow.style.left = "auto";
       appWindow.style.top = "10%";
       // appWindow.style.right = "10px";
       appWindow.style.bottom = "10%";
       appWindow.style.width = "50vw";
      //  contentEl.style.height = "60vh";
       appWindow.style.position = "absolute";
       pipBtn.style.display = "none";
       maximizeBtn.style.display = "inline-block";
       isPIP = true;
       isMaximized = false;
     }
   };
   // Close
   appWindow.querySelector(".close").onclick = () => appWindow.remove();

   // --- Simple resize from any direction or corner ---
   const handles = appWindow.querySelectorAll('.resize-handle');
   let isResizing = false;
   let currentHandle = null;
   let startX, startY, startWidth, startHeight, startLeft, startTop;
   handles.forEach(handle => {
     handle.addEventListener('mousedown', function(e) {
       isResizing = true;
       currentHandle = handle;
       startX = e.clientX;
       startY = e.clientY;
       const rect = appWindow.getBoundingClientRect();
       startWidth = rect.width;
       startHeight = rect.height;
       startLeft = rect.left;
       startTop = rect.top;
       document.body.style.userSelect = 'none';
       e.preventDefault();
       e.stopPropagation();
     });
   });
   document.addEventListener('mousemove', function(e) {
     if (!isResizing) return;
     let dx = e.clientX - startX;
     let dy = e.clientY - startY;
     let newWidth = startWidth;
     let newHeight = startHeight;
     let newLeft = startLeft;
     let newTop = startTop;
     const minWidth = 200, minHeight = 100;
     switch (true) {
       case currentHandle.classList.contains('resize-handle-e'):
         newWidth = Math.max(minWidth, startWidth + dx);
         break;
       case currentHandle.classList.contains('resize-handle-s'):
         newHeight = Math.max(minHeight, startHeight + dy);
         break;
       case currentHandle.classList.contains('resize-handle-w'):
         newWidth = Math.max(minWidth, startWidth - dx);
         newLeft = startLeft + dx;
         break;
       case currentHandle.classList.contains('resize-handle-n'):
         newHeight = Math.max(minHeight, startHeight - dy);
         newTop = startTop + dy;
         break;
       case currentHandle.classList.contains('resize-handle-ne'):
         newWidth = Math.max(minWidth, startWidth + dx);
         newHeight = Math.max(minHeight, startHeight - dy);
         newTop = startTop + dy;
         break;
       case currentHandle.classList.contains('resize-handle-nw'):
         newWidth = Math.max(minWidth, startWidth - dx);
         newLeft = startLeft + dx;
         newHeight = Math.max(minHeight, startHeight - dy);
         newTop = startTop + dy;
         break;
       case currentHandle.classList.contains('resize-handle-se'):
         newWidth = Math.max(minWidth, startWidth + dx);
         newHeight = Math.max(minHeight, startHeight + dy);
         break;
       case currentHandle.classList.contains('resize-handle-sw'):
         newWidth = Math.max(minWidth, startWidth - dx);
         newLeft = startLeft + dx;
         newHeight = Math.max(minHeight, startHeight + dy);
         break;
     }
     appWindow.style.width = newWidth + 'px';
     appWindow.style.height = newHeight + 'px';
     appWindow.style.left = newLeft + 'px';
     appWindow.style.top = newTop + 'px';
     appWindow.style.right = '';
     appWindow.style.bottom = '';
   });
   document.addEventListener('mouseup', function() {
     if (isResizing) {
       isResizing = false;
       currentHandle = null;
       document.body.style.userSelect = '';
     }
   });
   

 }



let date = document.getElementById('date');
if (date) {
  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const day = days[now.getDay()];
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  date.innerHTML = `${dd}-${mm}-${yyyy} , ${day}`;
}

 let time = document.getElementById('time')
 if (time) {
   const now = new Date();
   let hours = now.getHours();
   const minutes = String(now.getMinutes()).padStart(2, '0');
   const ampm = hours >= 12 ? 'PM' : 'AM';
   hours = hours % 12;
   hours = hours ? hours : 12; 
   time.innerHTML = `0${hours}:${minutes} ${ampm}`;
 }

