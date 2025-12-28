// Snow animation
const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflake() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5
    };
}

function drawSnowflake(snowflake) {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
    ctx.fill();
}

function updateSnowflake(snowflake) {
    snowflake.y += snowflake.speed;
    if (snowflake.y > canvas.height) {
        snowflake.y = 0;
        snowflake.x = Math.random() * canvas.width;
    }
}

function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(snowflake => {
        drawSnowflake(snowflake);
        updateSnowflake(snowflake);
    });
    requestAnimationFrame(animateSnow);
}

// Initialize snowflakes
for (let i = 0; i < 100; i++) {
    snowflakes.push(createSnowflake());
}
animateSnow();

// Play music function (replace with your own audio file)
function playMusic() {
    const audio = new Audio('holiday-music.mp3'); // Add your own MP3 file
    audio.play();
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});