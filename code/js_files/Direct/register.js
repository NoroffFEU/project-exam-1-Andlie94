function registerUser() {
    const email = document.getElementById('email').value;
    const email1= document.getElementById('email1').value;
    const password = document.getElementById('password').value;
    const password1 = document.getElementById('password1').value;

    const emailRules = /^[\w\-.]+@(stud\.)?noroff\.no$/;

    if (!emailRules.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (email !== email1) {
        alert('Email addresses do not match.');
        return;
    }

    if (password.length < 5) {
        alert('Password must be at least 5 characters long.');
        return;
    }

    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;

    if (!passwordRules.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    if (password !== password1) {
        alert("Passwords do not match.");
        return;
    }
}
    try {
        const response = await fetch('https://v2.api.noroff.dev/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to register user');
        }

        const data = await response.json();
        const email = data.email;
        const password = data.password;
        alert('Registration successful! You can now log in.');
    } catch (error) {
}
