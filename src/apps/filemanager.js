import { appWindow } from '../components/appWindow.js';

document.addEventListener("DOMContentLoaded", () => {
    const filemanagerEls = document.querySelectorAll('.filemanager');

    filemanagerEls.forEach(element => {
        element.addEventListener('click', () => {
            const content = `
                <div style="display: flex; height: 100%;">
                    <!-- Sidebar for drives -->
                    <div style="width: 120px; background: #23272e; color: #fff; padding: 10px 0;">
                        <div style="padding: 10px; cursor: pointer; border-bottom: 1px solid #333;">C:</div>
                        <div style="padding: 10px; cursor: pointer; border-bottom: 1px solid #333;">D:</div>
                        <div style="padding: 10px; cursor: pointer; border-bottom: 1px solid #333;">E:</div>
                    </div>
                    <!-- Main area for folders/files -->
                    <div style="flex: 1; background: #1a1d22; color: #fff; padding: 20px;">
                        <h3 style="margin-top: 0;">C:\\</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                            <div style="width: 80px; text-align: center;">
                                <img src="public/icons/desktop.svg" style="width: 48px;"/><br/>
                                <span>Desktop</span>
                            </div>
                            <div style="width: 80px; text-align: center;">
                                <img src="public/icons/filemanager .svg" style="width: 48px;"/><br/>
                                <span>Documents</span>
                            </div>
                            <div style="width: 80px; text-align: center;">
                                <img src="public/icons/filemanager .svg" style="width: 48px;"/><br/>
                                <span>Downloads</span>
                            </div>
                            <div style="width: 80px; text-align: center;">
                                <img src="public/icons/filemanager .svg" style="width: 48px;"/><br/>
                                <span>Pictures</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            appWindow({
                title: "File Manager",
                content,
                id: "filemanager-appwindow",
                bg: "#1a1d22"
            });
        });
    });
}); 