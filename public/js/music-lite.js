// Lightweight YouTube embeds for Music pages: load iframe only on click
(function(){
  function setup(el){
    const id = el.getAttribute('data-id');
    if(!id) return;
    // Thumbnail
    const thumb = document.createElement('img');
    thumb.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    thumb.alt = 'YouTube thumbnail';
    thumb.loading = 'lazy';
    thumb.className = 'yt-thumb';
    el.appendChild(thumb);
    // Play button overlay
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'yt-playbtn';
    btn.setAttribute('aria-label', 'Play video');
    btn.innerHTML = '▶';
    el.appendChild(btn);
    // Click to replace with iframe
    el.addEventListener('click', function(){
      if(el.classList.contains('loaded')) return;
      const iframe = document.createElement('iframe');
      const src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      iframe.setAttribute('src', src);
      iframe.setAttribute('title', 'YouTube video');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.loading = 'lazy';
      el.classList.add('loaded');
      el.innerHTML = '';
      el.appendChild(iframe);
    }, { once: true });
  }
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.yt-lite').forEach(setup);
  });
})();
