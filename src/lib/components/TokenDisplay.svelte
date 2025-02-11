<script>
    import { authToken } from '$lib/stores';
    let token;

    //Subscribe to the authToken store
    authToken.subscribe(value => {
        token = value;
    });
</script>

<div>
    <p>{token}</p>
</div>