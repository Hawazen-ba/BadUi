// Sidebar Toggle Button
const sidebarBtn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Change Background Color Randomly
const randomColorBtn = document.getElementById('randomColorBtn');
randomColorBtn.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Add to Cart Button
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    alert(`You added Product ${index + 1} to your cart!`);
  });
});
