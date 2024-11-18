console.log("Connected!");
// Footer with Date (applies to all pages)
const footer = document.getElementById('footer');
if (footer) { // Check if the footer exists on the page
    const currentYear = new Date().getFullYear();
    const fullDate = new Date().toDateString();
    footer.innerHTML = `&copy; Muhammad Ebad Riaz, ${currentYear}`;
    console.log(`Today's date is: ${fullDate}`);
}

// Portfolio Greeting (applies to all pages)
const greetingMessage = document.getElementById('greeting-message');
if (greetingMessage) { // Check if the greeting placeholder exists
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetingMessage.textContent = 'Good morning!';
        greetingMessage.className = 'morning';
    } else if (currentHour < 17) {
        greetingMessage.textContent = 'Good afternoon!';
        greetingMessage.className = 'afternoon';
    } else {
        greetingMessage.textContent = 'Good evening!';
        greetingMessage.className = 'evening';
    }
}

// Alert Button (specific to pages with the button)
const alertButton = document.getElementById('btn-alert');
if (alertButton) { // Check if the button exists
    alertButton.addEventListener('click', () => {
        alert('Hello world!');
    });

    // Hover Effect
    alertButton.onmouseover = () => {
        alertButton.textContent = 'Hovered!';
    };
    alertButton.onmouseout = () => {
        alertButton.textContent = 'Click me!';
    };
}

// For Loop with Ordered List (specific to pages with the list)
const numberList = document.getElementById('numbers');
if (numberList) { // Check if the ordered list exists
    for (let i = 1; i <= 12; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';
        numberList.appendChild(listItem);
    }
}
