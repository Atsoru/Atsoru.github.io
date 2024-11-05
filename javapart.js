// Existing code for animated navigation
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


function openModal() {
  const modal = document.getElementById("zoomModal");
  const zoomedImg = document.getElementById("zoomedImg");

  zoomedImg.src = document.querySelector(".profile-pic").src;
  modal.style.display = "flex"; // Ensure modal is visible
  requestAnimationFrame(() => modal.classList.add("show")); // Trigger transition
}

function closeModal() {
  const modal = document.getElementById("zoomModal");
  modal.classList.remove("show");

  // Wait for transition to end before hiding the modal
  modal.addEventListener('transitionend', () => {
      modal.style.display = "none";
  }, { once: true });
}
