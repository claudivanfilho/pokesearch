import { ReactElement } from "react";

declare module "swr-test-utils" {
  export const withGlobalState: (element: ReactElement) => ReactElement;
}
