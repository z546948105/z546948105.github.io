document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
  initGlitchEffects();
  initScrollAnimations();
  initContactForm();
  initSkillGlow();
  initNavbarEffects();
});

function initTerminal() {
  const terminalLines = document.querySelectorAll('.terminal-line');
  let delay = 0;
  
  terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-20px)';
    line.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateX(0)';
      
      if (line.querySelector('.command')) {
        typeCommand(line.querySelector('.command'));
      }
    }, delay);
    
    delay += 400;
  });
  
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    cursor.style.display = 'inline-block';
    cursor.style.animation = 'blink-cursor 1s step-end infinite';
  }
}

function typeCommand(element) {
  const text = element.textContent;
  element.textContent = '';
  
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 50);
}

function initGlitchEffects() {
  const glitchElements = document.querySelectorAll('.glitch-effect');
  
  glitchElements.forEach(element => {
    setInterval(() => {
      if (Math.random() > 0.8) {
        element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        element.style.filter = `hue-rotate(${Math.random() * 90 - 45}deg)`;
        
        setTimeout(() => {
          element.style.transform = 'translate(0, 0)';
          element.style.filter = 'hue-rotate(0deg)';
        }, 100);
      }
    }, 2000);
  });
  
  const logoText = document.querySelector('.logo-text');
  if (logoText) {
    setInterval(() => {
      if (Math.random() > 0.9) {
        logoText.style.textShadow = `0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink)`;
        setTimeout(() => {
          logoText.style.textShadow = '';
        }, 200);
      }
    }, 3000);
  }
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });
}

function initContactForm() {
  emailjs.init('zhongwc');
  
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.form-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>TRANSMITTING...</span>';
    submitBtn.disabled = true;
    submitBtn.style.background = 'linear-gradient(90deg, var(--neon-yellow), var(--neon-green))';
    
    emailjs.sendForm('service_0n3tkim', 'service_0n3tkim', contactForm)
      .then(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i><span>TRANSMISSION COMPLETE</span>';
        submitBtn.style.background = 'linear-gradient(90deg, var(--neon-green), #00ff00)';
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      }, (error) => {
        console.error('EmailJS error:', error);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>TRANSMISSION FAILED</span>';
        submitBtn.style.background = 'linear-gradient(90deg, #ff4444, #ff0000)';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      });
  });
}

function initSkillGlow() {
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const iconGlow = card.querySelector('.icon-glow');
      if (iconGlow) {
        iconGlow.style.opacity = '0.5';
      }
      
      card.style.boxShadow = `0 0 30px rgba(255, 0, 255, 0.3), inset 0 0 60px rgba(255, 0, 255, 0.1)`;
    });
    
    card.addEventListener('mouseleave', () => {
      const iconGlow = card.querySelector('.icon-glow');
      if (iconGlow) {
        iconGlow.style.opacity = '0';
      }
      
      card.style.boxShadow = '';
    });
  });
}

function initNavbarEffects() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 10, 15, 0.98)';
      navbar.style.borderBottom = '1px solid rgba(0, 245, 255, 0.3)';
      navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 245, 255, 0.1)';
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.9)';
      navbar.style.borderBottom = '1px solid rgba(0, 245, 255, 0.2)';
      navbar.style.boxShadow = 'none';
    }
  });
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.textShadow = '0 0 15px var(--neon-pink), 0 0 30px var(--neon-pink)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.textShadow = '';
    });
  });
}

function addRainEffect() {
  const heroSection = document.querySelector('.hero');
  
  for (let i = 0; i < 50; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    heroSection.appendChild(drop);
  }
}

addRainEffect();