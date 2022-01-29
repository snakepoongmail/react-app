import React from "react";

export let ContextProvider, ContextConsumer, Context;

export const createContext = () => {
    Context = React.createContext();
    const {Provider, Consumer} = Context;
    ContextProvider = Provider;
    ContextConsumer = Consumer;
}

