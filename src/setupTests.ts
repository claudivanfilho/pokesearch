// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { setupServer } from "msw/node";

import { defaultHandlers } from "./__tests__/utils/mockServiceWorker";

export const mockedServer = setupServer(...defaultHandlers);

beforeAll(() => mockedServer.listen());
afterEach(() => mockedServer.resetHandlers());
afterAll(() => mockedServer.close());
