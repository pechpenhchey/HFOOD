$(document).ready(function () {
  // Check if the user is already logged in
  checkAuth();

  // Event listener for the login button
  $('#loginBtn').on('click', function () {
      // Get username and password from the form
      var username = $('#username').val();
      var password = $('#password').val();

      // Perform a simple check (you should perform a secure authentication on the server side)
      if (username === 'exampleuser' && password === 'examplepassword') {
          // Save user information in localStorage
          var user = { username: username };
          localStorage.setItem('user', JSON.stringify(user));

          // Redirect or perform actions after successful login
          alert('Login successful!');
          checkAuth(); // Update UI
      } else {
          alert('Invalid username or password');
      }
  });

  // Event listener for the logout button
  $('#logoutBtn').on('click', function () {
      // Remove user information from localStorage
      localStorage.removeItem('user');

      // Redirect or perform actions after logout
      alert('Logout successful!');
      checkAuth(); // Update UI
  });

  // Function to check if the user is authenticated
  function checkAuth() {
      var user = localStorage.getItem('user');
      if (user) {
          user = JSON.parse(user);
          // User is authenticated
          $('#loginSection').hide();
          $('#logoutSection').show();
          $('#usernameDisplay').text('Welcome, ' + user.username + '!');
      } else {
          // User is not authenticated
          $('#loginSection').show();
          $('#logoutSection').hide();
          $('#usernameDisplay').text('');
      }
  }
});