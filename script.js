// --- PASTE YOUR DATA HERE ---
// This is where you put the data from your Excel sheet.
// The format is: 'TEAMID': 'The riddle for that team'.
const riddleData = {
    'PKMN01': "I have a horn but cannot toot, and I love to drill. What am I?",
    'ASH123': "What has to be broken before you can use it?",
    'G0LDN1': "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    'TRNR07': "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    'R0CKET': "What is always in front of you but can’t be seen?",
    'BLUE99': "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    'RED25': "What has many keys but can’t open a single lock?"
};
// --- END OF DATA SECTION ---


// Get references to the HTML elements
const form = document.getElementById('riddleForm');
const teamIdInput = document.getElementById('teamIdInput');
const riddleDisplay = document.getElementById('riddleDisplay');

// Listen for the form submission
form.addEventListener('submit', function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Get the user's input and convert it to uppercase to match our data keys
    const teamId = teamIdInput.value.toUpperCase().trim();

    // Clear previous styling
    riddleDisplay.classList.remove('riddle-success', 'riddle-error');
    riddleDisplay.innerHTML = ''; // Clear previous content

    // Check if the Team ID exists in our data
    if (riddleData[teamId]) {
        // If the ID is valid, display the riddle
        riddleDisplay.textContent = riddleData[teamId];
        riddleDisplay.classList.add('riddle-success');
    } else {
        // If the ID is invalid, display an error message
        riddleDisplay.textContent = "Team ID not found! Are you sure you entered it correctly, trainer? 🤔";
        riddleDisplay.classList.add('riddle-error');
    }
});