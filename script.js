function generateUniqueLink() {
    const uniqueId = Date.now(); // Generates a unique ID based on the current timestamp
    const link = `${window.location.origin}/?id=${uniqueId}`; // Modify this path as needed
    return link;
}

function getResumeDataFromURL() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    // Simulated data fetching based on ID
    if (id) {
        // In a real app, you would fetch data from a server or local storage
        console.log(`Fetching resume data for ID: ${id}`);
        // For demonstration, you can log the ID or load data from localStorage
    }
}

// Update resume display based on form input
document.getElementById('resume-form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('name').innerText = document.getElementById('input-name').value;
    document.getElementById('contact').innerText = document.getElementById('input-contact').value;
    document.getElementById('education').innerText = document.getElementById('input-education').value;
    document.getElementById('experience').innerText = document.getElementById('input-experience').value;
    document.getElementById('skills').innerText = document.getElementById('input-skills').value;
});

// Share functionality
document.getElementById('share-button').addEventListener('click', () => {
    const uniqueLink = generateUniqueLink(); // Generate the unique link
    
    // Copy the link to the clipboard
    navigator.clipboard.writeText(uniqueLink).then(() => {
        alert('Link copied to clipboard: ' + uniqueLink);
    });

    // Display the link in an alert
    alert('Share this link: ' + uniqueLink);
});

// Call this function when the page loads
window.onload = getResumeDataFromURL;
