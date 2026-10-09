const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width, height, columns, drops;

const chars =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコ";

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    columns = Math.floor(width / 16);
    drops = Array(columns).fill(1);
}

resize();

window.addEventListener("resize", resize);

function drawMatrix() {
    ctx.fillStyle = "rgba(2, 4, 6, 0.08)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
        const char = chars[
            Math.floor(Math.random() * chars.length)
        ];

        const colors = [
            "#00ff88",
            "#00e5ff",
            "#0088ff",
            "#a855f7"
        ];

        ctx.fillStyle =
            colors[Math.floor(Math.random() * colors.length)];

        ctx.fillText(char, i * 16, drops[i] * 16);

        if (drops[i] * 16 > height &&
            Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 40);

const messages = [
    "Accessing mainframe...",
    "System secured.",
    "Welcome, ABO KHALDON."
];

let messageIndex = 0;
let charIndex = 0;

function typeText() {
    const element = document.getElementById("typing");
    const message = messages[messageIndex];

    element.textContent = message.substring(0, charIndex);

    charIndex++;

    if (charIndex > message.length) {
        setTimeout(() => {
            charIndex = 0;
            messageIndex =
                (messageIndex + 1) % messages.length;
            typeText();
        }, 1500);

        return;
    }

    setTimeout(typeText, 70);
}

typeText();

function updateClock() {
    document.getElementById("clock").textContent =
        new Date().toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
