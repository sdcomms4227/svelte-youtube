import {readable, derived} from 'svelte/store';

// 초기값(null)
export const time = readable(null, function start(set){
    const interval = setInterval(()=> {
        set(new Date());
    }, 1000);

    return function stop(){
        clearInterval(interval);
    }
})

const start = new Date();

// derived : 파생된
export const elapsed = derived(time, $time => Math.round(($time - start)/1000));