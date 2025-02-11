<script>
    import { clearAuthToken } from '$lib/stores';

    function handleLogout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            clearAuthToken();
        }
    }
</script>

<button class="logout-button" on:click={handleLogout}>Logout</button>


<style>
    .logout-button {
        font-size: 1em;
        background-color: #333;
        color: white;
        border: none;
        margin-right: 10px;
        padding-left: 10px;
        padding-right:10px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .logout-button:hover {
        background-color: #111111;
    }
</style>