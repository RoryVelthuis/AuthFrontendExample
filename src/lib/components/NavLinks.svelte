<script>
        import { isUserLoggedIn, userData } from '$lib/stores';
</script>

<ul>
    <li><a href="/">Home</a></li>
    {#if $isUserLoggedIn}
    <li><a href="/profile">Profile</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    {/if}
</ul>


<style>
    ul {
        list-style-type: none;
        margin-left: 20px;
        padding: 0;
    }

    li {
        display: inline;
        margin-right: 10px;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>