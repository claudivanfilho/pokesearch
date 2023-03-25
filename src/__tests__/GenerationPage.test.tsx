import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Router } from "react-router-dom";

import App from "../App";

describe("Test Generation Page", () => {
  describe("when initiated", () => {
    it("should appear pokemon listing", async () => {});
  });

  describe("when searched a pokemon with an unmatched text", () => {
    it("should filter the pokemon listing with no results", async () => {});
  });

  describe("when searched a pokemon with a matched text", () => {
    it("should filter the pokemon listing with 1 result", async () => {});
  });
});
