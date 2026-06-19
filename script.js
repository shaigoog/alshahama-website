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

const whatsappNumber = '971503238103';
const formattedPhone = '+971 50 323 8103';
const officialEmail = 'info@alshahamamedical.com';
const defaultMessage = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمات الشهامة للمعدات الطبية.');

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  link.href = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `التواصل مع الشهامة عبر واتساب على الرقم ${formattedPhone}`);
});

const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.href = `mailto:${officialEmail}`;
  emailLink.setAttribute('aria-label', `إرسال بريد إلكتروني إلى ${officialEmail}`);
}

const contactActions = document.querySelector('.contact-actions');
if (contactActions && !contactActions.querySelector('.phone-link')) {
  const phoneLink = document.createElement('a');
  phoneLink.className = 'btn btn-outline-light phone-link';
  phoneLink.href = `tel:+${whatsappNumber}`;
  phoneLink.textContent = `اتصال: ${formattedPhone}`;
  phoneLink.setAttribute('aria-label', `الاتصال بالشهامة على الرقم ${formattedPhone}`);
  contactActions.insertBefore(phoneLink, emailLink || null);
}
