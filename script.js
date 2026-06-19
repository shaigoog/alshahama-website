const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'فتح القائمة');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Add the official WhatsApp number here in international format without +.
// Example: const whatsappNumber = '971501234567';
const whatsappNumber = '';
const defaultMessage = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات الشهامة للمعدات الطبية.');

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  if (whatsappNumber) {
    link.href = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});
