<script>
    import { isUserLoggedIn } from '$lib/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/navbar.svelte';


    onMount(() => {
        isUserLoggedIn.subscribe(loggedIn => {
            if (!loggedIn) {
                setTimeout(() => {
                    goto('/login');
                }, 1000)
            }
        });
    })
</script>


<div class="page-container">
    {#if $isUserLoggedIn}
    <Navbar />
    <div class="about-page-container">
        <h1>Profile</h1>
    </div>
    {:else}
    <div id="redirect-notice">
        <div class="redirect">Redirecting</div>
    </div>
    {/if}
</div>

<style>
    .page-container{
        height: 100vh;
    }

    #redirect-notice{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
