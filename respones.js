<script>
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form input values
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        // Store the values (you can store them in variables or use other data structures)
        const loginData = {
            email: email,
            password: password
        };

        // You can then use loginData for further processing or send it to the server
        console.log(loginData);
    });
</script>

// Store data in local storage
localStorage.setItem("loginData", JSON.stringify(loginData));

// Retrieve data from local storage
const storedLoginData = JSON.parse(localStorage.getItem("loginData"));

// Use the stored data as needed
console.log(storedLoginData);

