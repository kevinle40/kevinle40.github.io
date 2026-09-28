// Project cards: clicking a card opens its hidden .project-detail content in a dialog.
const dialog = document.getElementById('project-dialog');
const content = dialog.querySelector('.dialog-content');

document.querySelectorAll('.project-card').forEach((card) => {
  const detail = card.querySelector('.project-detail');
  card.querySelector('.card-trigger').addEventListener('click', () => {
    content.innerHTML = detail.innerHTML;
    content.scrollTop = 0;
    dialog.showModal();
  });
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

// Clicking the dimmed backdrop (outside the panel) closes it too.
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
