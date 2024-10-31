const links = document.querySelectorAll('.nav-link');


links.forEach(link => {
  link.addEventListener('click', (e) => {
    
    e.preventDefault();

    
    const url = link.href;

    
    anime({
      targets: 'body',
      opacity: 0,
      duration: 500,
      easing: 'easeInOutSine',
      complete: () => {
        
        window.location.href = url;
      }
    });
  });
});