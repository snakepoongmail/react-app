import React from "react";

export let ContextProvider, ContextConsumer;

export const createContext = () => {
    const {Provider, Consumer} = React.createContext();
    ContextProvider = Provider;
    ContextConsumer = Consumer;
}

