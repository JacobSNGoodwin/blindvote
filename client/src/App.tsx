import { Component, onCleanup, onMount } from 'solid-js';
import { pbClient } from './pocketbase';

import styles from './App.module.css';

const App: Component = () => {
  onMount(() => {
    pbClient.realtime.subscribe('game', function (e) {
      console.log(e.record);
    });
  });

  onCleanup(() => {
    pbClient.realtime.unsubscribe();
  });
  return (
    <div class={styles.App}>
      <h1>Cleaned up Solid app!</h1>
    </div>
  );
};

export default App;
