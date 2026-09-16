(() => {
  const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const view = document.getElementById('view-openers');
  if (!view) return;

  function applyHighlights() {
    const selected = new Set(
      [...view.querySelectorAll('[data-champ].selected')]
        .map(b => b.dataset.champ)
        .filter(Boolean)
    );
    const signature = [...selected].sort().join('|');
    const renderKey = `${signature}:${view.querySelectorAll('.slots .slot').length}`;
    if (view.dataset.highlightKey === renderKey) return;
    view.dataset.highlightKey = renderKey;

    view.querySelectorAll('.slots .slot').forEach(slot => {
      const raw = (slot.dataset.rawText || slot.textContent || '').trim();
      slot.dataset.rawText = raw;
      const pieces = raw.split('/').map(x => x.trim());
      slot.innerHTML = pieces.map(piece =>
        selected.has(piece)
          ? `<span class="slot-match">${esc(piece)}</span>`
          : `<span>${esc(piece)}</span>`
      ).join('<span class="slot-sep">/</span>');
    });
  }

  const observer = new MutationObserver(() => requestAnimationFrame(applyHighlights));
  observer.observe(view, { childList: true, subtree: true });
  document.addEventListener('click', () => requestAnimationFrame(applyHighlights));
  requestAnimationFrame(applyHighlights);
})();
