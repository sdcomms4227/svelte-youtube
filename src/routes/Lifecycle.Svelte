<script>
  //onMount
  //beforeUpdate
  //afterUpdate
  //onDestory

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

  onMount(() => {
    // alert("onMount");
  });

  let seconds = 0;

  //   let interval = window.setInterval(() => {
  //     seconds++;
  //   }, 1000);

  onDestroy(() => {
    // window.clearInterval(interval);
  });

  beforeUpdate(() => {
    console.log("beforeUpdate");
  });

  afterUpdate(() => {
    console.log("afterUpdate");
  });

  let count = 0;

  function addCount() {
    count++;
  }
</script>

<p>Hello개발자의 품격 {seconds}</p>

<button type="button" on:click={addCount}>Add Count</button>
