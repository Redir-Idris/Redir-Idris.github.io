document.addEventListener('DOMContentLoaded', function () {
  const navMenuButton = document.getElementById('nav-menu-button');
  const navbarNav = document.getElementById('navbarNav');

  navMenuButton.addEventListener('click', function () {
      navbarNav.classList.toggle('active');
  });
});


// Contact - Email validering

function validateEmail(email) {
  const trimmedEmail = email.trim();
  if (trimmedEmail.includes(' ')) {
    return false; 
  }
  if (trimmedEmail.indexOf('@') === -1) {
    return false; 
  }
  return true; 
}