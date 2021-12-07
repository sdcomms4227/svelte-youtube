<script>
    // export let title;

    import {getContext} from 'svelte';

    let title = getContext('title');
</script>

<p>Nested component : {title}</p>