import { dogToHumanAge } from "./dogAgeCalc";
describe("Handles invalid input", function () {
	it("Handles invalid input", () => {
		const result = dogToHumanAge("a");
		expect(result).toBe("invalid input");
	});
});
