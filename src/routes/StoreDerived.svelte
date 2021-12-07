<script>
    import {name, greeting} from '../stores/stores-derived';
</script>

<h1>{$greeting}</h1>
<input type="text" bind:value={$name}>