//const hexColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
let hexColors = [];
const user_id = localStorage.getItem('userIdTokenized');
initializePage();

async function initializePage() {
    if (user_id != null) {

        let response = await getHistory();
        hexColors = await response.json();
        populatePage();
    } 
}



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

function populatePage() {
    const colorHist = document.querySelector('.login');
    colorHist.innerHTML = "";

    for (var i = 0; i < hexColors.length; i++) {
        var hex = "#" + hexColors[i].hex
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
    }

    
    
}