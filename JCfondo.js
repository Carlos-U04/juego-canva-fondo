const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function drawBackground() {
    const brickWidth = 60;
    const brickHeight = 20;
    const brickColor = '#8B4513'; // Color de los ladrillos

    for (let row = 0; row < canvas.height / brickHeight; row++) {
        for (let col = 0; col < canvas.width / brickWidth; col++) {
            let xOffset = (row % 2 === 0) ? 0 : brickWidth / 2;
            let x = col * brickWidth + xOffset;
            let y = row * brickHeight;
            
            // Determinar si el ladrillo está fuera del borde derecho
            if (x + brickWidth > canvas.width) {
                ctx.fillStyle = '#000'; // Pintar de negro
            } else {
                ctx.fillStyle = brickColor; // Pintar del color del ladrillo
            }
            
            ctx.fillRect(x, y, brickWidth - 1, brickHeight - 1);
        }
    }
}

// Dibujar el fondo de ladrillos
drawBackground();