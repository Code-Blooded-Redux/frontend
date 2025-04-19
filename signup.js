document
  .getElementById('login-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get values from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    if (password !== password2) {
      alert('Passwords do not match!');
      return;
    }
    const response = await registerAccount(username, password);

    //This part is strange.
    if (response.ok) {
        const userIdTokenized = await response.json();
        localStorage.setItem('userIdTokenized', userIdTokenized);
        window.location.href = 'signin.html';
    } else {
      alert('Something went wrong with registration');
    }
  });

async function registerAccount(username, password) {
  const response = await fetch(
    'https://backend-bf0t.onrender.com/account/signup',
    {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-Type': 'application/json', // <-- Important!
      },
    }
  );
  return response;
}