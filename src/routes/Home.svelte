<script>
    import Nested from "../components/Nested.svelte";

    let title = "개발자의 품격";
    let htmlTitle = "<span>개발자의 품격</span>"
    let src = "https://heropy.blog/css/images/vendor_icons/svelte.png";

    let count = 0;
    function increaseCount(){
        count++;
    }
    function decreaseCount(){
        count--;
    }

    $: if(count > 5){
        alert("Count는 5를 초과할 수 없습니다.");
        count--;
    }

    $: if(count < 0){
        alert("Count는 0 미만이 될 수 없습니다.");
        count++;
    }

    // watch
    $: sum = count * 2;

    let arrData = [
        {
            name: "홍길동",
            city: "서울"
        },
        {
            name: "철수",
            city: "부산"
        },
        {
            name: "영희",
            city: "제주"
        }
    ];
</script>

<table>
    {#each arrData as {name, city}, index}
    <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{city}</td>
    </tr>
    {/each}
</table>

<hr>

<button type="button" on:click="{increaseCount}">+</button>
<button type="button" on:click="{decreaseCount}">-</button>
{#if count > 3}
    <div>CountHigh: {count}</div>
{:else}
    <div>CountLow: {count}</div>
{/if}
<div>Sum: {sum}</div>

<hr>

<Nested {title} />

<h1>Hello {title}</h1>
<h1>Hello {@html htmlTitle}</h1>

<img {src} alt="IMG" />

<style>
    :global(span) {
        color:red;
    }
</style>