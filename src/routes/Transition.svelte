<script>
    import {fade, fly, slide} from 'svelte/transition';

    let visible = true;
    let status = 'wating...';
</script>

<p>status: {status}</p>

<label>
    <input type="checkbox" bind:checked={visible} />
    visible
</label>

{#if visible}

    <!-- fade-->
    <p transition:fade>Fades in and out</p>

    <!-- fly -->
    <p transition:fly={{y:200, duration: 2000}}>Fades in and out</p>

    <!-- in & out -->
    <p in:fly={{y:200, duration: 2000}} out:fade>Fades in and out</p>

    <!-- transition event -->
    <p
        transition:fly = {{y:200, duration: 2000}}
        on:introstart = {()=>status='intro started'}
        on:introend = {()=>status='intro ended'}
        on:outrostart = {()=>status='outro started'}
        on:outroend = {()=>status='outro ended'}
    >
        Fades in and out
    </p>

    <ul transition:slide>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>
{/if}