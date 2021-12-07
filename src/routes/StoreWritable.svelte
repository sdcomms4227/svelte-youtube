<script>
    import { onDestroy } from 'svelte';

    // writable store - 쓰기
    // readable store - 읽기
    // derived store - 기존 스토어 -> 새로운 스토어

    // import {writable} from 'svelte/store';

    import {count} from '../stores/stores-writable.js';

    // update : 수정
    function updateCount(){
        count.update(n => n + 1);
    }

    // subscribe : 변경 감지
    const unsubscribe = count.subscribe(value => {
        alert(value);
    });

    onDestroy(unsubscribe);
</script>

<button type="button" on:click={updateCount}>Count</button>