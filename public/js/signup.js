const signupForm = document.querySelector('.signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value;
  const username = document.querySelector('#username-signup').value;
  const password = document.querySelector('#password-signup').value;

  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect to the adoption page after successful signup
      res.redirect('/adoption');
    } else {
      alert('Signup failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});