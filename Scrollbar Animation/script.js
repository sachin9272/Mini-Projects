const scrollbar = document.querySelector('.scrollbar');

window.addEventListener('scroll',() => {
  let percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollbar.style.width = percentage + '%'
});