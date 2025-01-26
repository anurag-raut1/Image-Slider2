const buttons = document.querySelectorAll('.container .button-holder .button');
const wrapperHolder = document.querySelector('.container .wrapper-holder');

let currentIndex = 0;

// Smooth slider navigation with buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;

        const translateValue = -index * 100;
        wrapperHolder.style.transform = `translateX(${translateValue}%)`;

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Auto-scroll functionality
function autoScroll() {
    currentIndex = (currentIndex + 1) % buttons.length; // Loop back to the first image
    const translateValue = -currentIndex * 100;
    wrapperHolder.style.transform = `translateX(${translateValue}%)`;

    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[currentIndex].classList.add('active');
}

// Start auto-scroll every 3 seconds
let autoScrollInterval = setInterval(autoScroll, 3000);

// Pause auto-scroll on hover
wrapperHolder.addEventListener('mouseover', () => {
    clearInterval(autoScrollInterval);
});

// Resume auto-scroll when not hovering
wrapperHolder.addEventListener('mouseout', () => {
    autoScrollInterval = setInterval(autoScroll, 3000);
});

// Set the first button as active initially
buttons[0].classList.add('active');
