<script>
    async function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            username: username.value,
            password: password.value
        }
        console.log('Form data:', formData);

        let response;
        try {
            response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        } catch (error){
            console.error(error);
        }

        if(response) {
            if (response.ok) {
                const result = await response.json();
                console.log('Registration successful:', result);
            } else {
                const errorResult = await response.json();
                console.error('Failed to register:', errorResult);

            }
        } else {
            console.log('No response from server');
        }
 
    }
</script>

<form class="register-form" on:submit={handleSubmit}>
    <div class="form-content">
        <div class="left">
            <h1>Register</h1>
            <img class="brand-logo" alt="brand-logo" src="/icons/brand-logo.jpg">
        </div>
        <div class="right">
            <!-- Your form fields here -->
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
        
            
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            
            <button type="submit">Register</button>
        </div>
    </div>
</form>

<style>
 .register-form {
        width: 400px;
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 0px 0px;
        background-color: #fff;
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
    .brand-logo {
        width: 30px;
        height: auto;
    }
    .register-form h1 {
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