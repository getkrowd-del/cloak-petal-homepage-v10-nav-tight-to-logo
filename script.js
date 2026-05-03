const nw = document.getElementById('navWrapper');
  window.addEventListener('scroll', () => nw.classList.toggle('scrolled', window.scrollY > 60));
  function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.nav-hamburger');
    const frame = document.getElementById('cp-chat-frame');
    const bubble = document.getElementById('cp-chat-bubble');
    const callout = document.getElementById('vip-callout');
    if (menu.classList.contains('open') && !menu.contains(e.target) && !burger.contains(e.target)) menu.classList.remove('open');
    if (!bubble.contains(e.target) && !frame.contains(e.target) && !callout.contains(e.target)) frame.classList.remove('open');
  });
  function closeVip() { document.getElementById('vip-callout').classList.add('hidden'); }
  setTimeout(closeVip, 12000);
  let chatLoaded = false;
  function openChat() {
    const frame = document.getElementById('cp-chat-frame');
    const iframe = document.getElementById('cp-chat-iframe');
    closeVip();
    if (!frame.classList.contains('open')) {
      if (!chatLoaded) { iframe.src = 'https://paymegpt.com/agents/53946577/embed'; chatLoaded = true; }
      frame.classList.add('open');
    } else { frame.classList.remove('open'); }
  }