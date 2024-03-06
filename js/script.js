document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const birthdate = new Date(document.getElementById('birthdate').value);
        const gender = document.getElementById('gender').value;

        const dayOfWeek = birthdate.getDay(); // 0 (Sunday) to 6 (Saturday)
        let akanName;

        // Determine Akan name based on gender and day of the week
        if (gender === 'male') {
            akanName = getAkanMaleName(dayOfWeek);
        } else {
            akanName = getAkanFemaleName(dayOfWeek);
        }

        // Display the result
        displayResult(akanName);
    });
});

//Function to get Akan name for males based on the day of the week
function getAkanMaleName(dayOfWeek) {
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    return maleNames[dayOfWeek];
}

// Function to get Akan name for females based on the day of the week
function getAkanFemaleName(dayOfWeek) {
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    return femaleNames[dayOfWeek];
}

// Function to display the result
function displayResult(akanName) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your Akan name is: <strong>${akanName}</strong></p>`;
}