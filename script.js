document.getElementById("year").textContent = new Date().getFullYear();

// Loader: stay up for at least one full hop, then fade out once the page has loaded.
// Add ?loader to the URL to keep it on screen (handy for previewing the animation).
(function () {
  const loader = document.getElementById("loader");
  if (!loader) return;

  if (new URLSearchParams(location.search).has("loader")) return;

  const MIN_TIME = 1400;
  const start = performance.now();

  function hide() {
    const wait = Math.max(0, MIN_TIME - (performance.now() - start));
    setTimeout(function () {
      loader.classList.add("is-done");
      document.body.classList.remove("is-loading");
      setTimeout(function () { loader.remove(); }, 700); // after the 0.6s fade
    }, wait);
  }

  if (document.readyState === "complete") hide();
  else window.addEventListener("load", hide);
})();
