// Function to check for job listings and apply
function checkForJobs() {
    console.log("Checking for jobs...");
    const jobListings = document.querySelectorAll('.job-card'); // Adjust selector to match the actual job card

    jobListings.forEach(listing => {
        if (listing.textContent.includes('Part-Time') || listing.textContent.includes('Flex')) {
            const applyButton = listing.querySelector('button'); // Adjust to match the apply button
            if (applyButton) {
                console.log('Found a job: ', listing.textContent);
                applyButton.click();
            }
        }
    });
}

// Function to refresh the page
function refreshPage() {
    console.log("Refreshing the page...");
    window.location.href = window.location.href; // Reload the current page
}

// Run the job checking function every 4 seconds
setInterval(checkForJobs, 4000);

// Refresh the page every 4 seconds
setInterval(refreshPage, 4000);
