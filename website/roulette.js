document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('.result');
    const startBtn = document.getElementById('start-roulette');

    function generateRandomHex() {
        const intro = document.querySelector('.intro');
        if (intro) intro.classList.add('hidden');
        result.innerHTML = "";

        let hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        hex = `#${hex}`;

        const card = document.createElement('div');
        card.className = 'color-card';

        const block = document.createElement('div');
        block.className = 'color-block';
        block.style.backgroundColor = hex;

        const info = document.createElement('div');
        info.className = 'color-info';
        info.innerHTML = `<div>${hex}</div>`;

        card.appendChild(block);
        card.appendChild(info);
        result.appendChild(card);

        const regenerateBtn = document.createElement('button');
        regenerateBtn.className = 'roulette-button';
        regenerateBtn.textContent = 'Spin Again';
        regenerateBtn.addEventListener('click', generateRandomHex);
        result.appendChild(regenerateBtn);
    }

    startBtn.addEventListener('click', generateRandomHex);
});
