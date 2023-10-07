const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(email, password)
    if (/*name && */email && password) {
      console.log('Post initiated')
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ /**name,*/ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);