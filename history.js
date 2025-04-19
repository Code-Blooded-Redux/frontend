//const hexColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
let response = getHistory();
const hexColors = await response.json();

/**retrieve history */
async function getHistory() {
    const user_id = localStorage.getItem('userIdTokenized');
    const response = await fetch(
      'https://backend-bf0t.onrender.com/account/color_history/' + user_id,
      {
        method: 'GET',
      }
    );
    return response;
  }

const colorHist = document.querySelector('.color-hist');
colorHist.innerHTML = "";

hexColors.forEach(hex => {
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
    colorHist.append(card);
});