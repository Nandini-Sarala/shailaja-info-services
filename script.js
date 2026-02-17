function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

function openCategory(category) {
  window.location.href = "products.html?category=" + category;
}
