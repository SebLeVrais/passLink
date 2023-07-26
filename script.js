const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Replace this with your authentication logic (front-end only example).
  if (username === 'YoMama' && password === 'Pass') {
    // Redirect the user to the dashboard.html page on successful login.
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
