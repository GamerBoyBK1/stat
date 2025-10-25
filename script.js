function checkHTTP(url, elementId) {
    fetch(url, {mode: "no-cors"}).then(() => {
        document.getElementById(elementId).innerText = "✅ Online";
    }).catch(() => {
        document.getElementById(elementId).innerText = "❌ Offline";
    });
}

function checkPort(ip, port, elementId) {
    let img = new Image();
    img.onload = () => document.getElementById(elementId).innerText = "✅ Online";
    img.onerror = () => document.getElementById(elementId).innerText = "❌ Offline";
    img.src = `http://${ip}:${port}/favicon.ico?${Date.now()}`;
}

function updateStatus() {
    // Panel via Cloudflare HTTPS
    checkHTTP("https://panel.coramtix.in/", "panel-status");

    // Nodes via direct IP:PORT
    checkPort("YOUR_NODE1_IP", 8080, "node1-status");
    checkPort("YOUR_NODE2_IP", 8080, "node2-status");
    checkPort("YOUR_NODE3_IP", 8080, "node3-status");
    checkPort("YOUR_NODEBOT_IP", 8080, "node4-status");
}

updateStatus();
setInterval(updateStatus, 5000);
