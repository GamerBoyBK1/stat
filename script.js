function check(host, port, elementId) {
    let img = new Image();
    img.onload = () => document.getElementById(elementId).innerText = "✅ Online";
    img.onerror = () => document.getElementById(elementId).innerText = "❌ Offline";
    img.src = `http://${host}:${port}/favicon.ico?` + Date.now();
}

function updateStatus() {
    check("panel.coramtix.in", 443, "panel-status");
    check("node-in-1.coramtix.in", 8080, "node1-status");
    check("node-in-2.coramtix.in", 8080, "node2-status");
    check("node-in-3.coramtix.in", 8080, "node3-status");
    check("node-bot-1.coramtix.in", 8080, "node4-status");
}

updateStatus();
setInterval(updateStatus, 5000);
