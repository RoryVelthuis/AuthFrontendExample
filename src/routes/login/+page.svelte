<script>
    import LoginForm from '$lib/components/LoginForm.svelte';
    import Navbar from '../../lib/components/navbar.svelte';

</script>

<div class="page-container">
    <Navbar />
    <div class="login-page-container">
        <LoginForm />
        <div class="information-container">
            <p class="login-link">Dont have an account? <a href="/register">Sign up</a></p>
            <p class="reset-password-link">Forgot your password? <a href="/forgot-password">Reset Password</a></p>
        </div>
    </div>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .login-page-container {
        margin: 0px;
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        flex-direction: column;
        flex-grow: 1;
    }

    .information-container {
        margin-top: 10px; /* Adjust this value to add space between the form and the information container */
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