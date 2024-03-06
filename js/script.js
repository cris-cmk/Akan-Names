document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    form.addEventListener('submit', function(event) {

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