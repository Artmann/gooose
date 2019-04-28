export default function lazyLoadAssets() {
  setTimeout(() => {
    const elements = document.querySelectorAll('link[data-lazy-load="true"]');

    elements.forEach(element => element.setAttribute("rel", "stylesheet"));
  }, 1);
}
