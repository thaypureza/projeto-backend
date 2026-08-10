const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="uname"]');
const passwordInput = document.querySelector('input[name="psw"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (username === '' || password === '') {
    alert('Erro: Por favor, preencha todos os campos!');
    return; 
  }

  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  
  alert('Login feito com sucesso!');
});