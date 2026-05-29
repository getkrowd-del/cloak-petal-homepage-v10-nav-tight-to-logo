// Read URL params
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || 'Friend';
  const party = params.get('party') || '—';
  const conf = params.get('conf') || 'CP-' + Math.floor(100000 + Math.random() * 900000);

  document.getElementById('guestName').textContent = name + '!';
  document.getElementById('confNumber').textContent = conf;
  document.getElementById('confNameFull').textContent = name + ' — your reservation is confirmed';
  document.getElementById('confParty').textContent = party + (party === '1' ? ' guest' : ' guests');

  // Confetti
  const colors = ['#C9A84C','#E8A0B0','#f36b83','#FAF8F5','#E8C97A','#c4607a'];
  const wrap = document.getElementById('confettiWrap');
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${4 + Math.random() * 8}px;
      height: ${4 + Math.random() * 8}px;
      animation-duration: ${2.5 + Math.random() * 3}s;
      animation-delay: ${Math.random() * 2}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    wrap.appendChild(el);
  }

  // Chat
  let chatLoaded = false;
  function openChat() {
    const frame = document.getElementById('cp-chat-frame');
    const iframe = document.getElementById('cp-chat-iframe');
    if (!frame.classList.contains('open')) {
      if (!chatLoaded) { iframe.src = 'https://paymegpt.com/agents/53946577/embed'; chatLoaded = true; }
      frame.classList.add('open');
    } else { frame.classList.remove('open'); }
  }
  document.addEventListener('click', function(e) {
    const frame = document.getElementById('cp-chat-frame');
    const bubble = document.getElementById('cp-chat-bubble');
    if (!bubble.contains(e.target) && !frame.contains(e.target)) frame.classList.remove('open');
  });