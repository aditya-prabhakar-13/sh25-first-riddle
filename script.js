// --- SIMPLIFIED DATA STRUCTURE ---
// Just map your Team ID directly to the image URL.
const hintData = {
    'f93erw': ' images/142304R2.png',
    'wnve7u': '',
    'w2cr2m': '',
    'a4bquq': '',
    'ruwwvr': '',
    'e2stuj': '',
    'ybfud2': '',
    'fhf6av': '',
    'xc2xln': '',
    '4y79d3': '',
    'lg1czu': '',
    'ii6cx3': '',
    'yrqtau': '',
    'nxlk3d': '',
    'sykdue': '',
    'jub278': '',
    'yxx1n1': '',
    '3xibkd': '',
    '79he5j': '',
    's28vup': '',
    'lntfcg': '',
    '1jx81z': '',
    'n5xzd8': '',
    '8n31kc': '',
    'q27kxe': '',
    'jbtkdm': '',
    'ufy576': '',
    'dxzgd1': '',
    'z147sd': '',
    '2js8kk': '',
    'nhy9jm': '',
    'knhp8b': '',
    'xc9zwk': '',
    'thiflb': '',
    'k3hd71': '',
    'p6ymsg': '',
    '3959us': '',
    'u5fqcg': '',
    '8qnyxz': '',
    'denvhc': '',
    'mkx8mt': '',
    '1nwfx7': '',
    'iq2kpt': '',
    'u53szd': '',
    'ezga2c': '',
    '4tpkk2': '',
    'zkbgnn': '',
    'yj4ars': '',
    'xe3a96': '',
    '82c17d': '',
    'p5mze5': '',
    'eaue3p': '',
    'rvw6jf': '',
    'uaivxx': '',
    'dvpx74': '',
    'zsnhms': '',
    'jgg3be': '',
    '5lfsgw': '',
    '7xa255': '',
    'enx6tl': '',
    'zzj4b2': '',
    'b6eql5': '',
    'jaqvct': '',
    '9rarey': '',
    'g7mfgd': '',
    'd9dg5w': '',
    'dpf559': '',
    '9325b7': '',
    'vs58x3': '',
    '2thea6': '',
    'hgbj2q': '',
    'f896ga': '',
    '7pfz2y': '',
    'n5dqed': '',
    'rywqd9': '',
    'ib4yyp': '',
    'grpeyd': '',
    'yk13i9': '',
    '8laucs': '',
    'mcj9sn': '',
    'izn72k': '',
    'm1ekat': '',
    'fkhsbg': '',
    'uazis3': '',
    'jqb9ic': '',
    'ghunit': '',
    '9qmx8b': '',
    'rsh3ln': '',
    'rgheie': '',
    'le22gd': '',
    'b64jvp': '',
    'ez9hp3': '',
    'ug77ar': '',
    '9jh3zc': '',
    'aqv6zy': '',
    'xa5jlu': '',
    'sdkt3p': '',
    'gg9iar': '',
    '7aet2h': '',
    '8jt9xd': '',
    'waw8dq': '',
    '1y1da3': '',
    'h5z6tn': '',
    'stwdrt': '',
    'rnk4xn': '',
    'gancey': '',
    'mer87l': '',
    'pgvzmy': '',
    't5rbg4': '',
    'zv88ub': '',
    'nejimj': '',
    'lsb5xz': '',
    'b39qpp': '',
    '4f7wwy': '',
    'r7898h': '',
    'djbppl': '',
    'eww3bl': '',
    '726w4y': '',
    'itk3wq': '',
    'rsfnns': '',
    'mtzve8': '',
    'nb3m3j': '',
    '35krq8': '',
    'ascanw': '',
    '6vxmup': '',
    'vr56a5': '',
    'jf99ye': '',
    'ssjcvg': '',
    '8qrru1': ''
};
// --- END OF DATA SECTION ---


// Get references to the HTML elements
const form = document.getElementById('riddleForm');
const teamIdInput = document.getElementById('teamIdInput');
const riddleDisplay = document.getElementById('riddleDisplay');

// Listen for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const teamId = teamIdInput.value.toUpperCase().trim();
    const imageUrl = hintData[teamId]; // Get the image URL for the entered ID

    // Clear previous styling and content
    riddleDisplay.classList.remove('riddle-success', 'riddle-error');
    riddleDisplay.innerHTML = ''; 

    if (imageUrl) {
        // If a URL is found, create and display the image
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Visual Hint"; // Alt text for accessibility
        riddleDisplay.appendChild(img);
        riddleDisplay.classList.add('riddle-success');

    } else {
        // If the ID is not found, display an error message
        riddleDisplay.textContent = "Team ID not found! Are you sure you entered it correctly, trainer? 🤔";
        riddleDisplay.classList.add('riddle-error');
    }
});