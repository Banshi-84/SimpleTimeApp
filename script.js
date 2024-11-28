function updateClock() {
    const now = new Date(); // Get a current Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Create a time string
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Update the clock element's content
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Display the clock immediately on page load
  updateClock();
  