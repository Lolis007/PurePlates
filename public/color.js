  // Handle theme color switcher
  document.querySelectorAll('.color-switchers .btn').forEach(button => {
    button.addEventListener('click', () => {
        document.documentElement.style.setProperty('--nav-main', getComputedStyle(button).backgroundColor);
        document.querySelectorAll('.color-switchers .btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Save selected color to localStorage
        localStorage.setItem('themeColor', button.dataset.color);
    });
});

// Load selected color from localStorage
const savedColor = localStorage.getItem('themeColor');
if (savedColor) {
    const button = document.querySelector(`.color-switchers .btn[data-color="${savedColor}"]`);
    if (button) {
        document.documentElement.style.setProperty('--nav-main', getComputedStyle(button).backgroundColor);
        button.classList.add('active');
    }
}

// Popup message delay
document.querySelector('nav').addEventListener('mouseenter', () => {
    setTimeout(() => {
        document.getElementById('popup').style.display = 'block';
    }, 1000);
});

// Add item functionality with validation
document.getElementById('addItem').addEventListener('click', () => {
    const newItem = document.getElementById('newItem').value.trim();
    if (newItem) {
        const list = document.querySelector('.sidebar ul');
        const li = document.createElement('li');
        li.textContent = newItem;
        list.appendChild(li);
        document.getElementById('newItem').value = '';
    } else {
        alert('Please enter a valid item.');
    }
});