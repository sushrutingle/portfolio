// Theme persistence - apply before render to prevent flicker
(function() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Page Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.page-loader').classList.add('hidden');
  }, 600);
});

// Contact Popup
const contactBtn = document.getElementById('contactBtn');
const contactPopup = document.getElementById('contactPopup');
const contactOverlay = document.getElementById('contactOverlay');
const contactClose = document.getElementById('contactClose');

function openContactPopup() {
  contactPopup.classList.add('active');
  contactOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeContactPopup() {
  contactPopup.classList.remove('active');
  contactOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openContactPopup();
});

contactClose.addEventListener('click', closeContactPopup);
contactOverlay.addEventListener('click', closeContactPopup);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeContactPopup();
  }
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.body.classList.add('theme-transition');
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 500);
});

// Navbar scroll effect - enhanced
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && !this.id === 'contactBtn') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Scroll reveal animations - Enhanced with blur + scale
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Expertise cards animation
const expertiseCards = document.querySelectorAll('.expertise-card');

const expertiseObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -30px 0px'
});

expertiseCards.forEach(card => expertiseObserver.observe(card));

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Subtle parallax effect on hero - enhanced
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      
      if (scrolled < window.innerHeight) {
        const name = document.querySelector('.hero-name');
        const headline = document.querySelector('.hero-headline');
        const intro = document.querySelector('.hero-intro');
        
        if (name) name.style.transform = `translateY(${scrolled * 0.15}px)`;
        if (headline) headline.style.transform = `translateY(${scrolled * 0.1}px)`;
        if (intro) intro.style.transform = `translateY(${scrolled * 0.05}px)`;
      }
      
      ticking = false;
    });
    ticking = true;
  }
});

// Reverse video loop for seamless playback
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.playbackRate = 0.5;
  let isReversing = false;
  let reverseId = null;
  
  heroVideo.addEventListener('ended', () => {
    if (!isReversing) {
      isReversing = true;
      heroVideo.pause();
      
      function reverseFrame() {
        if (heroVideo.currentTime > 0) {
          heroVideo.currentTime -= 0.033;
          reverseId = requestAnimationFrame(reverseFrame);
        } else {
          isReversing = false;
          heroVideo.currentTime = 0;
          cancelAnimationFrame(reverseId);
          heroVideo.playbackRate = 0.5;
          heroVideo.play();
        }
      }
      reverseFrame();
    }
  });
}
