document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Dummy credentials for testing (you can replace this with real database authentication)
    const users = [
        { email: "test@swarize.in", password: "password123" },
        { email: "admin@swarize.in", password: "admin123" },
        { email: "user@swarize.in", password: "userpass" },
        { email: "bhargavahire22@gmail.com", password: "ahire@123" },
        { email: "bhargavahire22@gmail.com", password: "Ahire@123" },
        { email: "bhargavahire@gmail.com", password: "ahire@123" },
        { email: "bhargavahire@gmail.com", password: "Ahire@123" }


    ];

    // Check if the entered credentials match any user in the list
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("✅ Login successful! Redirecting to homepage...");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        errorMessage.textContent = "❌ Invalid email or password. Try again.";
        errorMessage.style.color = "red";
    }
});
