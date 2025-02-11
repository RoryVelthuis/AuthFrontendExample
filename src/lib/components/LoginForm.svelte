<script>
    import { setAuthToken, setUserData } from '$lib/stores';
    import { goto } from '$app/navigation';
    let errorMessage = '';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = 'http://localhost:3000/auth/login';
        errorMessage = ''; // Clear previous error message

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: event.target.username.value,
                password: event.target.password.value
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log(data);
            localStorage.setItem('token', data.token);
            setAuthToken(data.token);
            await fetchProtectedData(data.token);
            goto('/'); // Redirect to home page
        } else {
            console.error(data);
            errorMessage = data.message;
        }
    }

    async function fetchProtectedData(token) {
        if (!token) {
            console.log('No token found');
            return;
        }

        const response = await fetch('http://localhost:3000/protected', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            setUserData(data.user);
            console.log('Protected Data:', data.user);
        } else {
            console.error('Failed to fetch protected data');
        }
    }
</script>

<form class="login-form" on:submit={handleSubmit}>
    <div class="form-content">
        <div class="left">
            <h1>Login</h1>
            <img class="brand-logo" alt="brand-logo" src="/icons/brand-logo.jpg">

            {#if errorMessage}
                <p class="error-message">{errorMessage}</p>
            {/if}

        </div>
        <div class="right">
            <label for="username">Username</label>
            <input type="text" name="username" placeholder="" />
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="" />
            <button type="submit">Login</button>
        </div>
    </div>
</form>

<style>
    .login-form {
        width: 400px;
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 0px 0px;
        background-color: #fff;
    }

    .error-message {
        margin-top: 10px;
        color: red;
        font-size: 0.75rem;
    }

    .form-content {
        display: flex;
        flex-direction: row;
    }

    .form-content .right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
    }

    .form-content .left {
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: start;
        width: 100%;
    }

    .brand-logo{
        width: 30px;
        height: auto;
    }

    .login-form h1 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        color: #333;
    }

    .right label {
        margin-bottom: 5px;
        font-weight: bold;
        color: #555;
    }

    .right input {
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
    }

    .right input:focus {
        border-color: #007BFF;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    .right button {
        padding: 10px 20px;
        font-size: 1rem;
        color: #fff;
        background-color: #007BFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .right button:hover {
        background-color: #0056b3;
    }
</style>