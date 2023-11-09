/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Map } from "./App";

describe("renders the correct number of obstacles", function () {
	it("renders the correct number of obstacles", () => {
		render(<Map numberOfObstacles={10} />);
		const obstacles = screen.getAllByTestId("obstacle");
		expect(obstacles.length).toBe(10);
	});
});
