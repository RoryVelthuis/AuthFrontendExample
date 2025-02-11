<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import RegisterForm from '$lib/components/RegisterForm.svelte';
</script>

<div class="page-container">
    <Navbar />
    <div class="register-page-container">
        <RegisterForm class="register-form-o"/>
        <div class="information-container">
            <p class="login-link">Already have an account? <a href="/login">Login</a></p>
            <p class="reset-password-link">Forgot your password? <a href="/forgot-password">Reset Password</a></p>
        </div>
    </div>
</div>



<style>
    .page-container{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .register-page-container {
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        flex-direction: column;
        flex-grow: 1;
        /* margin-top: 100px; */
    }

    .information-container {
        margin-top: 20px; /* Adjust this value to add space between the form and the information container */
        width: 100%; /* Adjust width as needed */
        text-align: center; /* Center text if needed */
        /* Additional styling for the information container */
    }

    .information-container .login-link {
        margin-bottom: 10px; /* Adjust this value to add space between the login link and the reset password link */
        font-size: smaller; /* Adjust font size as needed */
    }

    .information-container .reset-password-link {
        font-size: smaller;
    }
    
</style>
