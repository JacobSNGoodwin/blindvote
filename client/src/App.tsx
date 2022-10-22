import { Component } from 'solid-js';
import { PocketBaseProvider } from './pocketbase';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <PocketBaseProvider>
      <div class={styles.App}>
        <h1 class="title">Cleaned up Solid app!</h1>
      </div>
    </PocketBaseProvider>
  );
};

export default App;
