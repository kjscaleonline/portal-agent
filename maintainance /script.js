(() => {
  const particleLayer = document.getElementById('particles');
  const progressBar = document.getElementById('progress-bar');
  const progressFill = document.getElementById('progress-fill');
  const progressValue = document.getElementById('progress-value');
  const year = document.getElementById('year');
  const refreshLink = document.getElementById('refresh-link');

  if (year) year.textContent = new Date().getFullYear();

  if (particleLayer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const count = window.innerWidth < 600 ? 24 : 42;
    for (let i = 0; i < count; i += 1) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.setProperty('--delay', `${Math.random() * 5}s`);
      particle.style.setProperty('--duration', `${3 + Math.random() * 4}s`);
      particleLayer.appendChild(particle);
    }
  }

  if (progressBar && progressFill && progressValue) {
    const target = 78;
    window.requestAnimationFrame(() => {
      progressFill.style.width = `${target}%`;
      progressBar.setAttribute('aria-valuenow', String(target));
      const start = performance.now();
      const duration = 1600;
      const animate = (now) => {
        const fraction = Math.min((now - start) / duration, 1);
        progressValue.textContent = `${Math.round(target * fraction)}%`;
        if (fraction < 1) window.requestAnimationFrame(animate);
      };
      window.requestAnimationFrame(animate);
    });
  }

  if (refreshLink) {
    refreshLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.reload();
    });
  }
})();
