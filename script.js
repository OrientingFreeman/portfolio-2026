(function () {
  const categories = Array.from(document.querySelectorAll('.project-category'));
  const sidebarSections = Array.from(document.querySelectorAll('.sidebar-nav-section'));

  function syncSidebar(categoryName) {
    sidebarSections.forEach(function (section) {
      const isTarget = section.dataset.sidebarCategory === categoryName;
      const button = section.querySelector('.sidebar-category-toggle');
      const submenu = section.querySelector('.sidebar-submenu');
      section.classList.toggle('is-open', isTarget);
      if (button) button.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
      if (submenu) submenu.hidden = !isTarget;
    });
  }

  function openCategory(categoryName, shouldScroll) {
    categories.forEach(function (category) {
      const button = category.querySelector('.category-toggle');
      const panel = category.querySelector('.category-panel');
      const isTarget = category.dataset.category === categoryName;
      button.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
      panel.hidden = !isTarget;
    });

    syncSidebar(categoryName);

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

  document.querySelectorAll('[data-open-category]').forEach(function (control) {
    control.addEventListener('click', function () {
      openCategory(control.dataset.openCategory, false);
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
      document.querySelectorAll('.sidebar-submenu a').forEach(function (link) {
        link.classList.toggle('is-active', link === anchor);
      });
      requestAnimationFrame(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      event.preventDefault();
    }
  });

  // Keep the sidebar category aligned with the initially open main accordion.
  const initiallyOpen = categories.find(function (category) {
    const panel = category.querySelector('.category-panel');
    return panel && !panel.hidden;
  });
  if (initiallyOpen) syncSidebar(initiallyOpen.dataset.category);
})();