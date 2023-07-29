// Get all the navigation items
const navItems = document.querySelectorAll('.nav-item');

// Add click event listeners to each navigation item
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the active class from all navigation items
    navItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add the active class to the clicked navigation item
    item.classList.add('active');
  });
});
