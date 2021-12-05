<script>
  let name = "개발자의 품격";
  let yes = true;
  let options = [
    { v: 1, t: "Seoul" },
    { v: 2, t: "Busan" },
    { v: 3, t: "Jeju" },
  ];
  let selectedOption = 1;
</script>

<input type="text" bind:value={name} />
<p>Hello {name}</p>

<hr />

<label><input type="checkbox" bind:checked={yes} /> 체크박스 테스트</label>

{#if yes}
  <p>Yes</p>
{:else}
  <p>No</p>
{/if}

<select bind:value={selectedOption}>
  {#each options as opt}
    <option value={opt.v}>{opt.t}</option>
  {/each}
</select>

<p>Select option is : {selectedOption}</p>
