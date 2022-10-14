import { Component, onCleanup, ParentProps, useContext } from 'solid-js';
import { createContext } from 'solid-js';

import { client } from './client';

const PocketBaseContext = createContext({
  client,
});

const PocketBaseProvider: Component<ParentProps> = ({ children }) => {
  onCleanup(() => {
    client.realtime.unsubscribe();
  });

  return (
    <PocketBaseContext.Provider value={{ client }}>
      {children}
    </PocketBaseContext.Provider>
  );
};

const usePocketBaseClient = useContext(PocketBaseContext);

export { PocketBaseProvider, usePocketBaseClient };
