const mobileToggle = document.querySelector('.mobile-toggle');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.site-header');
const contactForm = document.querySelector('#contact-form');

mobileToggle?.setAttribute('aria-expanded', 'false');

mobileToggle?.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  mobileToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

navList?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileToggle?.setAttribute('aria-label', 'Abrir menu');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name')?.value.trim() || '';
  const phone = document.querySelector('#phone')?.value.trim() || '';
  const email = document.querySelector('#email')?.value.trim() || '';
  const service = document.querySelector('#service')?.value.trim() || '';
  const message = document.querySelector('#message')?.value.trim() || '';

  if (!name || !phone || !service || !message) {
    alert('Por favor, preencha Nome, Telefone, Serviço e Mensagem antes de enviar.');
    return;
  }

  // sanitize phone display (keep digits and +)
  const phoneDisplay = phone.replace(/[^+\d]/g, '');

  const businessNumber = '5543999378092';
  const text = `Olá Pontual Reparos.\n\nNome: ${name}\nTelefone: ${phoneDisplay}\nE-mail: ${email || '-'}\nServiço: ${service}\nMensagem: ${message}`;

  const url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(text)}`;
  try {
    window.open(url, '_blank');
    contactForm.reset();
  } catch (err) {
    console.error('Erro ao abrir WhatsApp:', err);
    alert('Não foi possível abrir o WhatsApp automaticamente. Por favor, copie a mensagem e envie manualmente.');
  }
});
