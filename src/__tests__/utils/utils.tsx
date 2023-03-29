import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import App from "../../App";

const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export const renderApp = (route = "/") =>
  renderWithRouter(
    <SWRConfig
      value={{
        revalidateOnMount: true,
        revalidateOnReconnect: true,
        dedupingInterval: 0,
        refreshInterval: 0,
        focusThrottleInterval: 0,
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <App />
    </SWRConfig>,
    { route }
  );
