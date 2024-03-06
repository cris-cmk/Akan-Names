document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const birthdate = new Date(document.getElementById('birthdate').value);
        const gender = document.getElementById('gender').value;
       if(gender == "select")
       {
        alert("Please Select Gender ");
       }

    });
});