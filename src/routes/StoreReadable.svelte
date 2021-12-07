<script>
    import {time, elapsed} from '../stores/stores-readable';

    // Intl : Date to format, Svelte 내장함수
    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    })
</script>

<!-- Store 의 경우 앞에 $를 필수로 추가해야 한다. -->
<h1>The time is {formatter.format($time)}</h1>
<h2>Thie page has been open for {$elapsed} seconds</h2>