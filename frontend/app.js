document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, address })
      });
  
      const result = await response.json();
  
      const messageDiv = document.getElementById('message');
      messageDiv.style.display = 'block'; // Show message div
  
      if (response.ok) {
        messageDiv.textContent = result.message || 'Registration successful!';
        messageDiv.style.color = 'green'; // Success message color
        document.getElementById('registerForm').reset(); // Reset form
      } else {
        messageDiv.textContent = result.error || 'Error during registration.';
        messageDiv.style.color = 'red'; // Error message color
      }
    } catch (error) {
      const messageDiv = document.getElementById('message');
      messageDiv.style.display = 'block'; // Show message div
      messageDiv.textContent = 'Network error: ' + error.message;
      messageDiv.style.color = 'red'; // Error message color
    }
  });
  