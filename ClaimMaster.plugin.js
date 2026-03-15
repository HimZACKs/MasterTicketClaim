/**
 * @name ClaimMaster
 * @author ZACK
 * @description asi nunca te roban tickets jaja
 * @version 1.0.0
 */

module.exports = class ClaimMaster {
    constructor() {
        this.defaultSettings = {
            keywords: "reclamar, claim, atender",
            minDelay: 1000,
            maxDelay: 2000,
            targetChannelId: ""
        };
        this.settings = { ...this.defaultSettings };
    }

    start() {
        this.settings = BdApi.Data.load("ClaimMaster", "settings") || this.defaultSettings;
        this.observe();
        BdApi.UI.showToast("ClaimMaster: Activado", {type: "success"});
    }

    stop() {
        if (this.observer) this.observer.disconnect();
        BdApi.UI.showToast("ClaimMaster: Desactivado", {type: "warn"});
    }

    observe() {
        this.observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) this.findButton(node);
                }
            }
        });

        this.observer.observe(document.querySelector("#app-mount"), {
            childList: true,
            subtree: true
        });
    }

    findButton(element) {
        if (this.settings.targetChannelId) {
            const currentChannel = window.location.href.split("/").pop();
            if (currentChannel !== this.settings.targetChannelId) return;
        }

        const buttons = element.querySelectorAll('button');
        const keywords = this.settings.keywords.split(",").map(k => k.trim().toLowerCase());

        for (const btn of buttons) {
            const text = btn.textContent.trim().toLowerCase();
            
            const isExactMatch = keywords.some(word => {
                const regex = new RegExp(`\\b${word}\\b`, 'i'); 
                return regex.test(text) && !text.includes("unclaim") && !text.includes("desatender");
            });

            if (isExactMatch) {
                if (btn.dataset.claimedByMaster) return;
                btn.dataset.claimedByMaster = "true";

                const delay = Math.floor(Math.random() * (this.settings.maxDelay - this.settings.minDelay + 1) + this.settings.minDelay);
                
                console.log(`[ClaimMaster] Objetivo detectado: "${text}". Reclamando en ${delay}ms...`);
                
                setTimeout(() => {
                    btn.click();
                    BdApi.UI.showToast(`Ticket Reclamado: ${text}`, {type: "info"});
                }, delay);
            }
        }
    }

    getSettingsPanel() {
        const panel = document.createElement("div");
        panel.style.padding = "15px";
        panel.style.color = "#eee";

        panel.innerHTML = `
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">Palabras Clave Exactas:</label>
                <input type="text" id="keys" value="${this.settings.keywords}" placeholder="reclamar, claim" style="width:100%; background:#111; color:#fff; border:1px solid #333; padding:8px; border-radius:4px;">
                <small style="color:#aaa;">Separa por comas. No detectará "unclaim" si pones "claim".</small>
            </div>
            
            <div style="margin-bottom: 15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">ID del Canal (Opcional):</label>
                <input type="text" id="chan" value="${this.settings.targetChannelId}" placeholder="ID del canal de tickets" style="width:100%; background:#111; color:#fff; border:1px solid #333; padding:8px; border-radius:4px;">
            </div>

            <div style="display:flex; gap:10px; margin-bottom: 20px;">
                <div style="flex:1;">
                    <label style="display:block; margin-bottom:5px; font-weight:bold;">Min Delay (ms):</label>
                    <input type="number" id="min" value="${this.settings.minDelay}" style="width:100%; background:#111; color:#fff; border:1px solid #333; padding:8px; border-radius:4px;">
                </div>
                <div style="flex:1;">
                    <label style="display:block; margin-bottom:5px; font-weight:bold;">Max Delay (ms):</label>
                    <input type="number" id="max" value="${this.settings.maxDelay}" style="width:100%; background:#111; color:#fff; border:1px solid #333; padding:8px; border-radius:4px;">
                </div>
            </div>

            <button id="save" style="width:100%; padding:12px; background:#5865F2; color:white; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">GUARDAR CAMBIOS</button>
        `;

        panel.querySelector("#save").onclick = () => {
            this.settings.keywords = panel.querySelector("#keys").value.trim();
            this.settings.targetChannelId = panel.querySelector("#chan").value.trim();
            this.settings.minDelay = parseInt(panel.querySelector("#min").value);
            this.settings.maxDelay = parseInt(panel.querySelector("#max").value);

            BdApi.Data.save("ClaimMaster", "settings", this.settings);
            BdApi.UI.showToast("Configuración de ClaimMaster actualizada", {type: "success"});
        };

        return panel;
    }
};
