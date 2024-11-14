// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission (Dummy for now)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent!');
  });
  