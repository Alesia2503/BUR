<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  // Burger Menu Toggle
  burger.addEventListener('click', (e) => {
      e.stopPropagation();
      burger.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('menu-open');
  });

  // Close Menu on Click Outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-menu') && !e.target.closest('.burger-menu')) {
          burger.classList.remove('active');
          navMenu.classList.remove('active');
          body.classList.remove('menu-open');
      }
  });
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
=======
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  // Burger Menu Toggle
  burger.addEventListener('click', (e) => {
      e.stopPropagation();
      burger.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('menu-open');
  });

  // Close Menu on Click Outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-menu') && !e.target.closest('.burger-menu')) {
          burger.classList.remove('active');
          navMenu.classList.remove('active');
          body.classList.remove('menu-open');
      }
  });
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
>>>>>>> 3f7a4738d75157f1d1c8a40a588c500bbf6b9294
});