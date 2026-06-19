const menuButton = document.querySelector('.menu-btn, .menu-toggle');
const nav = document.querySelector('.nav-panel, .main-nav');

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

const whatsappNumber = '971503238103';
const defaultMessage = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات الشهامة للمعدات الطبية.');

document.querySelectorAll('.whatsapp, .whatsapp-link').forEach((link) => {
  link.href = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});