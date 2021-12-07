import {writable, derived} from 'svelte/store';

// set : 대입
// export const count = writable(0);

export const name = writable('world');

export const greeting = derived(name, $name => `Hello ${$name}!`);