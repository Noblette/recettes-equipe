// Menu mobile - toggle
const menuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.backgroundColor = 'white';
      navLinks.style.padding = '24px';
      navLinks.style.gap = '18px';
      navLinks.style.boxShadow = '0 12px 20px rgba(0,0,0,0.05)';
      navLinks.style.zIndex = '999';
    }
  });
}

// Réinitialisation du menu mobile en mode desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 880 && navLinks) {
    navLinks.style.display = '';
    navLinks.style.flexDirection = '';
    navLinks.style.position = '';
    navLinks.style.backgroundColor = '';
    navLinks.style.padding = '';
  }
  if (window.innerWidth <= 880 && navLinks && navLinks.style.display === 'flex' && window.innerWidth > 880) {
    navLinks.style.display = '';
  }
});

// Surligner le lien actif lors du scroll
const sections = document.querySelectorAll('section[id], #accueil');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === current) link.classList.add('active');
  });
  
  if (scrollY < 200) {
    document.querySelector('.nav-links a[href="#accueil"]')?.classList.add('active');
  }
});