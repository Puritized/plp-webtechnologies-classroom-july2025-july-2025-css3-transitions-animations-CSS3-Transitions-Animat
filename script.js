/* =======================
   PART 2: FUNCTIONS
========================== */

// Global state variable
let isAnimated = false;

/**
 * Toggles the animation on a given element
 * @param {string} elementId - ID of the element to animate
 * @returns {boolean} - New state of animation
 */
function toggleAnimation(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return false; // return false if no element found

  el.classList.toggle('animate');
  isAnimated = !isAnimated;
  return isAnimated; // return updated state
}

// Attach event listener to button
document.getElementById('animateBtn').addEventListener('click', () => {
  const state = toggleAnimation('box');
  console.log("Box animation active:", state);
});


/* =======================
   PART 3: CSS + JS COMBINED
========================== */

// Modal functionality
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modalBtn');
const closeModal = document.getElementById('closeModal');

// Show modal
modalBtn.addEventListener('click', () => {
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add('show'), 50); // allow CSS transition
});

// Hide modal
closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = "none", 500); // wait for transition
});

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = "none", 500);
  }
});
