import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store/Store";

interface IReduxProviderType {
  children: React.ReactNode;
}

const ReduxProvider: FC<IReduxProviderType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
