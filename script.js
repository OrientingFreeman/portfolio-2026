(function () {
  const categories = Array.from(document.querySelectorAll('.project-category'));

  function openCategory(categoryName, shouldScroll) {
    categories.forEach(function (category) {
      const button = category.querySelector('.category-toggle');
      const panel = category.querySelector('.category-panel');
      const isTarget = category.dataset.category === categoryName;
      button.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
      panel.hidden = !isTarget;
    });

    if (shouldScroll) {
      const target = document.querySelector('[data-category="' + categoryName + '"]');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  categories.forEach(function (category) {
    const button = category.querySelector('.category-toggle');
    button.addEventListener('click', function () {
      const alreadyOpen = button.getAttribute('aria-expanded') === 'true';
      if (!alreadyOpen) openCategory(category.dataset.category, false);
    });
  });

  document.querySelectorAll('[data-open-category]').forEach(function (link) {
    link.addEventListener('click', function () {
      openCategory(link.dataset.openCategory, false);
    });
  });

  document.addEventListener('click', function (event) {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const selector = anchor.getAttribute('href');
    if (!selector || selector === '#') return;
    let target;
    try { target = document.querySelector(selector); } catch (error) { return; }
    if (!target) return;
    const panel = target.closest('.category-panel');
    if (panel) {
      const category = panel.closest('.project-category');
      openCategory(category.dataset.category, false);
      requestAnimationFrame(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      event.preventDefault();
    }
  });
})();
