import PocketBase from 'pocketbase';
// import { createContext } from 'solid-js';

console.log('The poketbase URL', import.meta.env.VITE_POCKETBASE_URL);
const client = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

// const PocketbaseContext = createContext({
//   client,
// });

// export function PocketBaseProvider() {}

export { client as pbClient };
