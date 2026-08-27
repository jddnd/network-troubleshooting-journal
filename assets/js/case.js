(() => {
  const sections = [...document.querySelectorAll('.case-content section[id]')];
  const links = [...document.querySelectorAll('.side-index a[href^="#"]')];

  const setActive = () => {
    if (!sections.length || !links.length) return;
    const offset = window.scrollY + 150;
    let active = sections[0].id;
    for (const section of sections) {
      if (section.offsetTop <= offset) active = section.id;
    }
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${active}`);
    });
  };

  setActive();
  addEventListener('scroll', setActive, { passive: true });

  document.querySelectorAll('[data-expand-evidence]').forEach(button => {
    button.addEventListener('click', () => {
      const details = [...document.querySelectorAll('.evidence-card details')];
      const shouldOpen = details.some(item => !item.open);
      details.forEach(item => { item.open = shouldOpen; });
      button.textContent = shouldOpen ? 'Collapse raw evidence' : 'Expand raw evidence';
    });
  });
})();
