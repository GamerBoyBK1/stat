async function checkPanel(elementId) {
    try {
        await fetch("https://panel.coramtix.in/", {
            method: "HEAD",
            mode: "no-cors",
            cache: "no-cache"
        });
        document.getElementById(elementId).innerText = "✅ Online";
    } catch (e) {
        document.getElementById(elementId).innerText = "❌ Offline";
    }
}

function checkPort(ip, port, elementId) {
    let img = new Image();
    img.onload = () => document.getElementById(elementId).innerText = "✅ Online";
    img.onerror = () => document.getElementById(elementId).innerText = "❌ Offline";
    img.src = `http://${ip}:${port}/favicon.ico?${Date.now()}`;
}

function updateStatus() {
    checkPanel("panel-status");

    checkPort("38.224.226.9", 8080, "node1-status");
    checkPort("YOUR_NODE2_IP", 8080, "node2-status");
    checkPort("node-in-3.coramtix.in", 8080, "node3-status");
    checkPort("YOUR_NODEBOT_IP", 8080, "node4-status");
}

updateStatus();
setInterval(updateStatus, 5000);
