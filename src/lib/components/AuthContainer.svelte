<script>
    import LogoutButton from './LogoutButton.svelte';
    import { isUserLoggedIn, userData } from '$lib/stores';

    let user;

    // Subscribe to userData store
    userData.subscribe(value => {
        user = value;
    });
</script>

<div class="auth-container">
    {#if $isUserLoggedIn}
        <div class="logout-container">
            <p>Welcome, {$userData.username}</p>
            <div class="vertical-line"></div>
            <LogoutButton />
        </div>
    {:else}
        <div class="login-container">
            <a href="/login">Login</a>
            <div class="vertical-line"></div>
            <div class="register-button"><a href="/register">Sign Up</a></div>
        </div>
    {/if}
</div>

<style>
    .auth-container {
        margin-left: auto;
        margin-right: 10px;
        height: 100%;
    }

    .auth-container a {
        color: white;
        text-decoration: none;
    }

    .auth-container p {
        color: white;
        text-decoration: none;
    }

    .logout-container {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .logout-container p {
        margin-right: 10px;
    }

    .login-container {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .vertical-line {
        border-left: 1px solid rgb(83, 83, 83);
        height: 60%;
        margin: 0 10px;
    }

    .register-button {
        padding-right: 10px;
        margin: 0;
    }
</style>